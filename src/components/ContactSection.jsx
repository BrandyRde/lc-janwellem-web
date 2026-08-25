import React, { useState } from 'react';
import { clubInfo } from '../data/clubData';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Landmark, Clock, Loader2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Versenden der Nachricht.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submit Error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@lc-janwellem.de.');
    }
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lions-gold">
            Kontakt & Dialog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lions-navy tracking-tight">
            Sprechen Sie uns an
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ob Sie ein Förderprojekt vorschlagen möchten, Fragen zu unserer Clubarbeit haben oder als Gast an einem unserer Clubabende teilnehmen möchten – wir freuen uns über Ihre Nachricht.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-bold text-lions-navy">
                Kontaktdaten & Clubführung
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lions-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Postanschrift</span>
                    <p>{clubInfo.name}</p>
                    <p>{clubInfo.address.street}</p>
                    <p>{clubInfo.address.zipCity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lions-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">E-Mail Kontakt</span>
                    <a href={`mailto:${clubInfo.contacts.general}`} className="text-lions-blue hover:underline block font-semibold">
                      {clubInfo.contacts.general}
                    </a>
                    <a href={`mailto:${clubInfo.contacts.foerderverein}`} className="text-slate-600 hover:underline block text-xs mt-0.5">
                      Förderverein: {clubInfo.contacts.foerderverein}
                    </a>
                    <a href={`mailto:${clubInfo.contacts.press}`} className="text-slate-600 hover:underline block text-xs">
                      Presse: {clubInfo.contacts.press}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-lions-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Telefon</span>
                    <a href={`tel:${clubInfo.contacts.phone}`} className="text-slate-700 hover:text-lions-blue font-semibold">
                      {clubInfo.contacts.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Leadership Box */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <User className="w-4 h-4 text-lions-navy" />
                  <span>Präsident: {clubInfo.board.president}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-lions-navy" />
                  <span>Vorsitzender Förderverein: {clubInfo.board.foerdervereinChair}</span>
                </div>
              </div>
            </div>

            {/* Club Meetings / Industrieclub Box */}
            <div className="bg-gradient-to-br from-lions-navy to-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-lions-gold/30 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lions-gold/20 text-lions-gold border border-lions-gold/40 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Clubabende & Treffpunkt</span>
                </span>
                <span className="text-xs font-semibold text-slate-300">Düsseldorf</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-white">
                  {clubInfo.meetings.location}
                </h4>
                <p className="text-xs font-semibold text-lions-gold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-lions-gold shrink-0" />
                  <span>{clubInfo.meetings.schedule}</span>
                </p>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{clubInfo.meetings.locationAddress} (am Kö-Bogen)</span>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200 space-y-1">
                <strong className="text-white block font-bold">Interessenten & Gäste willkommen:</strong>
                <p className="text-slate-300 leading-relaxed">
                  {clubInfo.meetings.guestInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-lions-navy">
                  Nachricht direkt senden
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Ihre Angaben werden vertraulich behandelt und ausschließlich zur Beantwortung Ihrer Anfrage genutzt.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-950">Vielen Dank für Ihre Nachricht!</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Ihre Nachricht wurde erfolgreich übermittelt. Wir haben Ihnen eine Bestätigung per E-Mail gesendet und werden uns zeitnah bei Ihnen melden.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                    >
                      Weitere Nachricht verfassen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">Versand fehlgeschlagen</strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Ihr Name *</label>
                      <input
                        type="text"
                        required
                        disabled={status === 'loading'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-lions-gold focus:ring-2 focus:ring-lions-gold/20 outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Ihre E-Mail *</label>
                      <input
                        type="email"
                        required
                        disabled={status === 'loading'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="beispiel@domain.de"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-lions-gold focus:ring-2 focus:ring-lions-gold/20 outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Betreff *</label>
                    <input
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="z.B. Anfrage Fördervorschlag / Spende / Gastabend"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-lions-gold focus:ring-2 focus:ring-lions-gold/20 outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Ihre Nachricht *</label>
                    <textarea
                      rows={5}
                      required
                      disabled={status === 'loading'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Wie können wir Ihnen helfen oder worum geht es in Ihrem Anliegen?"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-lions-gold focus:ring-2 focus:ring-lions-gold/20 outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-lions-navy hover:bg-slate-900 disabled:bg-slate-400 text-lions-gold font-bold px-8 py-3.5 rounded-xl shadow transition-all active:scale-98 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Nachricht senden</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
