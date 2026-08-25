const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
const db = admin.firestore();

// Transporter mit Google Workspace SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@lc-janwellem.de",
    pass: process.env.SMTP_PASSWORD
  }
});

exports.sendContactMessage = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST-Anfragen sind erlaubt." });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Bitte füllen Sie alle Pflichtfelder aus." });
  }

  const cleanSubject = subject ? subject.trim() : "Allgemeine Kontaktanfrage";
  const senderName = name.trim();
  const senderEmail = email.trim();
  const senderMessage = message.trim();
  const timestamp = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });

  try {
    // 1. Speichern in Firestore (zur Dokumentation & Ausfallsicherheit)
    try {
      await db.collection("kontaktanfragen").add({
        name: senderName,
        email: senderEmail,
        subject: cleanSubject,
        message: senderMessage,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    } catch (dbError) {
      console.warn("Hinweis: Firestore-Speicherung übersprungen/fehlgeschlagen:", dbError);
    }

    // 2. Benachrichtigungs-E-Mail an den Lions Club
    const clubMailOptions = {
      from: `"Webseite Lions Club Düsseldorf-Jan-Wellem" <info@lc-janwellem.de>`,
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
              <td style="padding: 8px 0;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">E-Mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${senderEmail}" style="color: #002b66; font-weight: bold;">${senderEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Betreff:</td>
              <td style="padding: 8px 0;">${cleanSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Datum:</td>
              <td style="padding: 8px 0;">${timestamp}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #f2b705; padding: 14px; border-radius: 4px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px;">Nachricht:</h4>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #334155;">${senderMessage}</p>
          </div>

          <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Sie können direkt auf diese E-Mail antworten, um an ${senderName} (${senderEmail}) zu schreiben.
          </p>
        </div>
      `
    };

    // 3. Bestätigungs-E-Mail an den Absender
    const senderConfirmationOptions = {
      from: `"Lions Club Düsseldorf-Jan-Wellem" <info@lc-janwellem.de>`,
      to: senderEmail,
      subject: `Eingangsbestätigung: Ihre Nachricht an den Lions Club Düsseldorf-Jan-Wellem`,
      text: `Guten Tag ${senderName},\n\n` +
        `vielen Dank für Ihre Nachricht an den Lions Club Düsseldorf-Jan-Wellem e.V.!\n\n` +
        `Wir haben Ihre Anfrage mit folgendem Inhalt erfolgreich erhalten:\n\n` +
        `Betreff: ${cleanSubject}\n` +
        `Ihre Nachricht:\n${senderMessage}\n\n` +
        `Ein Mitglied unseres Clubvorstands wird Ihre Nachricht prüfen und sich schnellstmöglich bei Ihnen melden.\n\n` +
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

          <p>Guten Tag <strong>${senderName}</strong>,</p>
          <p>vielen Dank für Ihre Kontaktaufnahme! Hiermit bestätigen wir, dass Ihre Nachricht erfolgreich bei uns eingegangen ist.</p>

          <div style="background-color: #f8fafc; border-left: 4px solid #002b66; padding: 14px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #64748b;"><strong>Betreff:</strong> ${cleanSubject}</p>
            <p style="margin: 0; font-size: 13px; color: #64748b;"><strong>Ihre übermittelte Nachricht:</strong></p>
            <p style="margin: 6px 0 0 0; white-space: pre-wrap; font-size: 14px; color: #334155;">${senderMessage}</p>
          </div>

          <p>Ein Mitglied unseres Teams wird Ihre Nachricht prüfen und sich zeitnah bei Ihnen melden.</p>

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

    // Beide E-Mails parallel absenden
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
