import React, { useState } from 'react';
import { clubInfo } from '../data/clubData';
import { Heart, Copy, Check, ExternalLink, ShieldCheck, FileText, Sparkles, Building2, QrCode } from 'lucide-react';

export default function DonationSection() {
  const [copied, setCopied] = useState(false);
  const [showGiroCode, setShowGiroCode] = useState(false);
  const iban = clubInfo.foerderverein.iban;

  const handleCopy = () => {
    navigator.clipboard.writeText(iban.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="spenden" className="py-20 lg:py-28 bg-amber-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lions-gold">
            Förderverein & Spenden
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lions-navy tracking-tight">
            Ihre Unterstützung kommt 1:1 in Düsseldorf an
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Als eingetragener, gemeinnütziger Förderverein garantieren wir absolute Transparenz. Sämtliche Verwaltungskosten des Lions Clubs werden privat getragen – Ihre Spende hilft unmittelbar Kindern und Jugendlichen in Not.
          </p>
        </div>

        {/* 2-Column Donation Options */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Online Donation / SumUp Shop */}
          <div className="lg:col-span-6 bg-gradient-to-br from-lions-navy to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lions-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lions-gold border border-lions-gold/30 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Schnell & Unkompliziert</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Direkt online spenden im SumUp-Store
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Über den offiziellen Onlineshop unseres Fördervereins bei <strong>SumUp</strong> können Sie mit wenigen Klicks sicher und direkt per Kreditkarte, PayPal, Apple Pay oder Klarna spenden oder Förderbeiträge leisten.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Sichere SSL-Verschlüsselung über SumUp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Freie Betragswahl für den guten Zweck</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Automatische Spendenquittung auf Wunsch</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 relative z-10">
              <a
                href={clubInfo.foerderverein.sumupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-lions-gold hover:from-amber-400 hover:to-amber-300 text-lions-navy font-extrabold text-base px-6 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Heart className="w-5 h-5 fill-lions-navy" />
                <span>Zum Förderverein Online-Shop (SumUp)</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Bank Transfer / IBAN */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-lions-blue border border-blue-200/60 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>Klassische Banküberweisung</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-lions-navy">
                Spendenkonto des Fördervereins
              </h3>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Kontoinhaber</span>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900">
                    {clubInfo.foerderverein.name}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Kreditinstitut</span>
                  <p className="text-sm font-semibold text-slate-800">
                    {clubInfo.foerderverein.bank}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">IBAN (Klicken zum Kopieren)</span>
                  <div className="flex items-center justify-between gap-2 mt-1 bg-white p-3 rounded-xl border border-slate-300">
                    <code className="text-sm sm:text-base font-mono font-bold text-lions-navy">
                      {iban}
                    </code>
                    <button
                      onClick={handleCopy}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        copied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                      title="IBAN kopieren"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Kopiert!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Kopieren</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* GiroCode Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowGiroCode(!showGiroCode)}
                    aria-expanded={showGiroCode}
                    className="w-full mt-2.5 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-lions-navy/20 bg-lions-navy/5 hover:bg-lions-navy/10 text-lions-navy text-xs font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lions-gold"
                  >
                    <QrCode className="w-4 h-4 text-lions-gold" />
                    <span>{showGiroCode ? 'GiroCode ausblenden' : 'GiroCode (QR-Code für Banking-App) anzeigen'}</span>
                  </button>

                  {/* GiroCode Expandable Panel */}
                  {showGiroCode && (
                    <div className="mt-3 p-4 bg-white rounded-2xl border border-amber-200/90 shadow-sm text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm inline-block">
                          <img
                            src="/images/girocode_spende.svg"
                            alt="GiroCode für automatische Spendenüberweisung per Banking-App"
                            width="160"
                            height="160"
                            className="w-40 h-40 mx-auto object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-lions-navy">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Offizieller EPC-GiroCode
                        </span>
                        <p className="text-[11px] text-slate-500 leading-snug max-w-xs mx-auto">
                          In der Banking-App (Sparkasse, ING, Volksbank, Deutsche Bank etc.) unter <strong>„Fotoüberweisung / QR-Code scannen“</strong> einlesen. Empfänger, IBAN & Spendenzweck werden sofort übernommen.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Verwendungszweck</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    "Spende Kinderförderung Düsseldorf" (zzgl. Name/Adresse für Quittung)
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Info Alert */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-start gap-3 text-xs text-slate-600">
              <FileText className="w-5 h-5 text-lions-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Steuerliche Absetzbarkeit:</strong> {clubInfo.foerderverein.notice}
              </p>
            </div>
          </div>

        </div>

        {/* Transparency Guarantee Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-lions-navy flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Transparenz-Versprechen des Vorstands</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Eingetragen im Vereinsregister unter {clubInfo.foerderverein.register}. Vorstandsvorsitzender: {clubInfo.foerderverein.chairman}. Gerne beantworten wir Ihre Fragen zur Mittelverwendung persönlich.
            </p>
          </div>
          <a
            href="mailto:foerderverein@lc-janwellem.de"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-lions-blue bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors"
          >
            <span>Fragen an den Förderverein</span>
          </a>
        </div>

      </div>
    </section>
  );
}
