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
              <span className="text-xs font-bold uppercase tracking-widest text-lions-gold">Datenschutz by Design</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-lions-navy mt-1">Datenschutzerklärung</h2>
            </div>

            {/* Cookie-Free Highlight Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>100% Cookie-freie & trackerfreie Webseite</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800">
                Diese Webseite setzt <strong>keinerlei Cookies</strong>, kein Google Analytics, kein Facebook-Pixel und keine sonstigen Tracking- oder Werbedienste ein. Es werden auch keine externen Webfonts (wie Google Fonts von Drittservern) geladen. Daher ist für diese Seite auch kein Cookie-Consent-Banner erforderlich.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">1. Verantwortliche Stelle</h3>
                <p>{clubInfo.legalName}</p>
                <p>{clubInfo.address.street}, {clubInfo.address.zipCity}</p>
                <p>E-Mail: {clubInfo.contacts.general}</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">2. Hosting & Bereitstellung</h3>
                <p>
                  Diese Webseite wird über <strong>Google Firebase Hosting</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) als statische Webseite bereitgestellt.
                </p>
                <p className="mt-1">
                  Beim Aufruf unserer Webseite erfasst der Webserver automatisch technische Server-Logfiles (z.B. IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs). Diese Daten sind technisch erforderlich, um die Stabilität, Sicherheit und korrekte Auslieferung der Webseite zu gewährleisten (Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nach kurzer Zeit automatisch anonymisiert bzw. gelöscht.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">3. Kontaktaufnahme</h3>
                <p>
                  Wenn Sie uns per E-Mail oder über unser Kontaktformular kontaktieren, werden die von Ihnen übermittelten Angaben ausschließlich zur Bearbeitung und Beantwortung Ihrer Anfrage gespeichert und verarbeitet (Rechtsgrundlage Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Eine Weitergabe an Dritte erfolgt ohne Ihre Einwilligung nicht.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">4. Ihre Rechte als betroffene Person</h3>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich hierzu bitte an die oben angegebene Adresse.
                </p>
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
