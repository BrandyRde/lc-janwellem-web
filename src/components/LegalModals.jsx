import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal: Impressum */}
        {activeModal === 'impressum' && (
          <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-lions-gold">Rechtliche Angaben</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-lions-navy mt-1">Impressum</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Anbieter</h3>
                <p>{clubInfo.legalName}</p>
                <p>{clubInfo.address.street}</p>
                <p>{clubInfo.address.zipCity}</p>
                <p>Telefon: {clubInfo.contacts.phone}</p>
                <p>E-Mail: <a href={`mailto:${clubInfo.contacts.general}`} className="text-lions-blue hover:underline">{clubInfo.contacts.general}</a></p>
                <p>Internet: <a href="https://lc-janwellem.de" className="text-lions-blue hover:underline">www.lc-janwellem.de</a></p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Distrikt & Club</h3>
                <p>Distrikt 111-Rheinland, Region III, Zone 3</p>
                <p>Clubnummer: {clubInfo.clubNumber}</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Vertretungsberechtigter Präsident</h3>
                <p>{clubInfo.board.president}</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV / § 55 RStV</h3>
                <p>{clubInfo.board.responsibleContent}</p>
                <p>Anschrift wie oben</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Förderverein</h3>
                <p><strong>{clubInfo.foerderverein.name}</strong></p>
                <p>Vorsitzender: {clubInfo.foerderverein.chairman}</p>
                <p>Eingetragen im Vereinsregister: {clubInfo.foerderverein.register}</p>
                <p>E-Mail: <a href={`mailto:${clubInfo.contacts.foerderverein}`} className="text-lions-blue hover:underline">{clubInfo.contacts.foerderverein}</a></p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Pressekontakt</h3>
                <p>E-Mail: <a href={`mailto:${clubInfo.contacts.press}`} className="text-lions-blue hover:underline">{clubInfo.contacts.press}</a></p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">Konzeption, Design & Technische Umsetzung</h3>
                <p>
                  <a
                    href="https://www.lichtundcode.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lions-blue hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>Licht & Code (www.lichtundcode.de)</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Datenschutz */}
        {activeModal === 'datenschutz' && (
          <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-lions-gold">Datenschutz by Design & by Default</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-lions-navy mt-1">Datenschutzerklärung</h2>
              <p className="text-xs text-slate-500 mt-1">Stand: August 2026 • Gemäß Datenschutz-Grundverordnung (DSGVO) und TDDDG</p>
            </div>

            {/* Cookie-Free Highlight Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% Cookie-freie & trackerfreie Webseite</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                Diese Webseite setzt <strong>keinerlei Cookies</strong>, kein Web-Tracking (kein Google Analytics, keine Werbepixel) und keine externen Webfonts (wie Google Fonts von Drittanbieter-Servern) ein. Ein Cookie-Consent-Banner ist daher gemäß § 25 Abs. 2 TDDDG nicht erforderlich.
              </p>
            </div>

            <div className="space-y-6">
              {/* 1. Verantwortlicher */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Name und Anschrift des Verantwortlichen</h3>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <strong className="text-slate-900 block text-sm">{clubInfo.legalName}</strong>
                  <p>{clubInfo.address.street}, {clubInfo.address.zipCity}</p>
                  <p>Vertreten durch den Präsidenten: {clubInfo.board.president}</p>
                  <p>Telefon: {clubInfo.contacts.phone}</p>
                  <p>E-Mail: <a href={`mailto:${clubInfo.contacts.general}`} className="text-lions-blue hover:underline font-semibold">{clubInfo.contacts.general}</a></p>
                  <p>Internet: <a href="https://lc-janwellem.de" className="text-lions-blue hover:underline">www.lc-janwellem.de</a></p>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Für den Spenden- und Förderbereich verantwortlich: <strong>{clubInfo.foerderverein.name}</strong>, vertreten durch den Vorsitzenden {clubInfo.foerderverein.chairman}, E-Mail: {clubInfo.contacts.foerderverein}.
                </p>
              </div>

              {/* 2. Bereitstellung der Website & Hosting */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Bereitstellung der Website & Server-Logfiles</h3>
                <p>
                  Wir hosten unsere Website bei <strong>Google Firebase Hosting</strong>, einem Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Mutterkonzern: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA).
                </p>
                <p>
                  Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Protokolldaten (Server-Logfiles). Hierzu gehören:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
                  <li>IP-Adresse des anfragenden Endgeräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Übertragene Datenmenge und HTTP-Statuscode</li>
                  <li>Browsertyp, Browserversion und verwendetes Betriebssystem</li>
                  <li>Referrer-URL (die zuvor besuchte Seite)</li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der technisch fehlerfreien Bereitstellung, Ausfallsicherheit und Absicherung unserer Systeme gegen Cyberangriffe. Google ist unter dem EU-US Data Privacy Framework (DPF) zertifiziert.
                </p>
              </div>

              {/* 3. Kontaktformular & E-Mail-Kommunikation */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Kontaktformular und E-Mail-Kommunikation</h3>
                <p>
                  Wenn Sie unser Kontaktformular nutzen oder uns eine E-Mail senden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Betreff und Nachrichtentext) an uns übermittelt und verarbeitet.
                </p>
                <p>
                  <strong>Zweck & Rechtsgrundlage:</strong> Die Datenverarbeitung dient ausschließlich der Bearbeitung und Beantwortung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags bzw. Mitgliedschaftsdialogs abzielt) sowie Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer effizienten und kundenorientierten Kommunikation).
                </p>
                <p>
                  <strong>E-Mail-Versand:</strong> Der E-Mail-Versand und die Eingangsbestätigung erfolgen verschlüsselt über Google Workspace SMTP. Zur Spam-Abwehr wird ein serverseitiger Honeypot-Mechanismus eingesetzt.
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend geklärt ist und keine gesetzlichen Aufbewahrungspflichten (z.B. nach HGB/AO) entgegenstehen.
                </p>
              </div>

              {/* 4. Keine Cookies & lokale Systemschriften */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">4. Verzicht auf Cookies, Web-Analytics & externe Fonts</h3>
                <p>
                  Unsere Website arbeitet nach dem Prinzip der Datenminimierung (Privacy by Design):
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
                  <li><strong>Keine Cookies:</strong> Es werden weder temporäre Session-Cookies noch persistente Tracking-Cookies gesetzt (§ 25 Abs. 2 TDDDG).</li>
                  <li><strong>Keine Web-Analyse:</strong> Es finden keine Profilbildungen, Reichweitenmessungen oder Benutzer-Tracking-Maßnahmen statt.</li>
                  <li><strong>Lokale Systemschriften:</strong> Schriften werden direkt über das lokale Betriebssystem des Nutzers gerendert. Es werden keine Verbindungen zu externen Schriftenservern (z.B. Google Fonts) aufgebaut.</li>
                </ul>
              </div>

              {/* 5. Externe Links (SumUp & Partner) */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">5. Externe Links (Spendenportal & Partner)</h3>
                <p>
                  Unsere Website enthält Verlinkungen zu externen Webseiten (z.B. zum SumUp-Onlineshop unseres Fördervereins unter <code>sumupstore.com</code>, zur Turnierseite <code>golfturnier.lc-janwellem.de</code> sowie zu Lions Deutschland <code>lions.de</code> und Partnerorganisationen). Wenn Sie diesen Links folgen, verlassen Sie unsere Webseite. Für die Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.
                </p>
              </div>

              {/* 6. SSL-/TLS-Verschlüsselung */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">6. SSL- bzw. TLS-Verschlüsselung (HTTPS & HSTS)</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine durchgehende SSL-/TLS-Verschlüsselung mit HSTS (HTTP Strict Transport Security). Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von <code>http://</code> auf <code>https://</code> wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              {/* 7. Betroffenenrechte */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">7. Ihre Rechte als betroffene Person</h3>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende Rechte:</p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-2">
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten Daten.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten personenbezogenen Daten („Recht auf Vergessenwerden“).</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung Ihrer Daten.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung Ihrer Daten, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt.</li>
                  <li><strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Jederzeitiger Widerruf einer einmal erteilten Einwilligung mit Wirkung für die Zukunft.</li>
                </ul>
                <p className="text-xs text-slate-600 pt-1">
                  Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung per E-Mail an <a href={`mailto:${clubInfo.contacts.general}`} className="text-lions-blue hover:underline font-semibold">{clubInfo.contacts.general}</a>.
                </p>
              </div>

              {/* 8. Beschwerderecht bei der Aufsichtsbehörde */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">8. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p>
                  Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu (Art. 77 DSGVO). Die für unseren Vereinssitz in Nordrhein-Westfalen zuständige Aufsichtsbehörde ist:
                </p>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-0.5">
                  <strong className="text-slate-900 block">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong>
                  <p>Kavalleriestraße 2–4, 40213 Düsseldorf</p>
                  <p>Telefon: 0211 / 38424-0 • E-Mail: poststelle@ldi.nrw.de</p>
                  <p>Internet: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-lions-blue hover:underline">www.ldi.nrw.de</a></p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
