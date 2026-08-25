const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const nodemailer = require("nodemailer");

initializeApp();

let db;
try {
  db = getFirestore();
} catch (e) {
  console.warn("Firestore notice:", e);
}

// Hilfsfunktion zur Verhinderung von HTML-Injection in E-Mail-Clients
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// E-Mail-Validierung
function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 120;
}

// Transporter mit Google Workspace SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

exports.sendContactMessage = onRequest({ cors: true, maxInstances: 10, invoker: "public" }, async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST-Anfragen sind erlaubt." });
  }

  const { name, email, subject, message, website_hp } = req.body || {};

  // 1. Honeypot Spam-Schutz: Wenn das versteckte Feld ausgefüllt ist, handelt es sich um einen Bot
  if (website_hp) {
    console.warn("Spam-Bot erkannt und abgefangen via Honeypot.");
    return res.status(200).json({ success: true, message: "Nachricht erfolgreich versendet." });
  }

  // 2. Validierung & Längenbegrenzung (Schutz vor DoS / Payload-Abuse)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Bitte füllen Sie alle Pflichtfelder aus." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." });
  }

  const senderName = String(name).trim().slice(0, 100);
  const senderEmail = String(email).trim().slice(0, 120);
  const cleanSubject = (subject ? String(subject).trim() : "Allgemeine Kontaktanfrage").slice(0, 200);
  const senderMessage = String(message).trim().slice(0, 5000);
  const timestamp = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

  if (senderName.length < 2 || senderMessage.length < 5) {
    return res.status(400).json({ error: "Name und Nachricht sind zu kurz." });
  }

  // HTML-escaped Varianten für sichere E-Mail-Templates
  const safeName = escapeHtml(senderName);
  const safeEmail = escapeHtml(senderEmail);
  const safeSubject = escapeHtml(cleanSubject);
  const safeMessage = escapeHtml(senderMessage).replace(/\n/g, "<br/>");

  try {
    // 1. In Firestore dokumentieren (optional)
    if (db) {
      try {
        await db.collection("kontaktanfragen").add({
          name: senderName,
          email: senderEmail,
          subject: cleanSubject,
          message: senderMessage,
          createdAt: FieldValue.serverTimestamp()
        });
      } catch (dbError) {
        console.warn("Firestore notice:", dbError.message);
      }
    }

    // 2. Benachrichtigungs-E-Mail an den Lions Club Vorstand
    const clubMailOptions = {
      from: `"Webseite Lions Club Düsseldorf-Jan-Wellem" <${process.env.SMTP_USER || "golfturnier@lc-janwellem.de"}>`,
      to: "info@lc-janwellem.de",
      replyTo: `"${senderName}" <${senderEmail}>`,
      subject: `[Kontaktformular] ${cleanSubject}`,
      text: `Neue Kontaktanfrage über die Webseite:\n\n` +
        `Name: ${senderName}\n` +
        `E-Mail: ${senderEmail}\n` +
        `Betreff: ${cleanSubject}\n` +
        `Datum: ${timestamp}\n\n` +
        `Nachricht:\n${senderMessage}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="border-bottom: 2px solid #002b66; padding-bottom: 12px; margin-bottom: 16px;">
            <h2 style="color: #002b66; margin: 0;">Neue Kontaktanfrage</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Eingegangen über lc-janwellem.de</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Absender:</td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #002b66; font-weight: bold;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Betreff:</td>
              <td style="padding: 8px 0;">${safeSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Datum:</td>
              <td style="padding: 8px 0;">${timestamp}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #f2b705; padding: 14px; border-radius: 4px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Nachricht:</h4>
            <p style="margin: 0; font-size: 14px; color: #334155;">${safeMessage}</p>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Sie können direkt auf diese E-Mail antworten, um an ${safeName} (${safeEmail}) zu schreiben.
          </p>
        </div>
      `
    };

    // 3. Bestätigungs-E-Mail an den Absender
    const senderConfirmationOptions = {
      from: `"Lions Club Düsseldorf-Jan-Wellem" <${process.env.SMTP_USER || "golfturnier@lc-janwellem.de"}>`,
      to: senderEmail,
      replyTo: "info@lc-janwellem.de",
      subject: `Eingangsbestätigung: Ihre Nachricht an den Lions Club Düsseldorf-Jan-Wellem`,
      text: `Guten Tag ${senderName},\n\n` +
        `vielen Dank für Ihre Nachricht an den Lions Club Düsseldorf-Jan-Wellem e.V.!\n\n` +
        `Wir haben Ihre Anfrage mit folgendem Inhalt erfolgreich erhalten:\n\n` +
        `Betreff: ${cleanSubject}\n` +
        `Ihre Nachricht:\n${senderMessage}\n\n` +
        `Ein Mitglied unseres Clubvorstands wird Ihre Nachricht prüfen und sich zeitnah bei Ihnen melden.\n\n` +
        `Mit freundlichen Grüßen\n` +
        `Lions Club Düsseldorf-Jan-Wellem e.V.\n` +
        `Grafenberger Allee 277-287\n` +
        `40237 Düsseldorf\n` +
        `https://www.lc-janwellem.de\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="text-align: center; border-bottom: 2px solid #002b66; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #002b66; margin: 0;">Lions Club Düsseldorf-Jan-Wellem</h2>
            <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">We Serve – Ehrenamt, das ankommt</p>
          </div>

          <p>Guten Tag <strong>${safeName}</strong>,</p>
          <p>vielen Dank für Ihre Kontaktaufnahme! Hiermit bestätigen wir, dass Ihre Nachricht erfolgreich bei uns eingegangen ist.</p>

          <div style="background-color: #f8fafc; border-left: 4px solid #002b66; padding: 14px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #64748b;"><strong>Betreff:</strong> ${safeSubject}</p>
            <p style="margin: 0; font-size: 13px; color: #64748b;"><strong>Ihre übermittelte Nachricht:</strong></p>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #334155;">${safeMessage}</p>
          </div>

          <p>Ein Mitglied unseres Vorstands wird Ihre Nachricht prüfen und sich zeitnah bei Ihnen melden.</p>

          <br/>
          <p style="margin: 0; font-weight: bold; color: #002b66;">Lions Club Düsseldorf-Jan-Wellem e.V.</p>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">
            Grafenberger Allee 277-287<br/>
            40237 Düsseldorf<br/>
            <a href="https://www.lc-janwellem.de" style="color: #002b66; text-decoration: none;">www.lc-janwellem.de</a>
          </p>
        </div>
      `
    };

    // Beide E-Mails parallel versenden
    await Promise.all([
      transporter.sendMail(clubMailOptions),
      transporter.sendMail(senderConfirmationOptions)
    ]);

    console.log(`Kontakt-E-Mails erfolgreich versendet für: ${senderEmail}`);
    return res.status(200).json({ success: true, message: "Nachricht erfolgreich versendet." });
  } catch (error) {
    console.error("Fehler beim Versenden der E-Mail:", error);
    return res.status(500).json({ error: "Fehler beim Versenden der Nachricht. Bitte versuchen Sie es später erneut." });
  }
});
