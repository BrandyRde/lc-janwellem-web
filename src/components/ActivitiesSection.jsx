import React from 'react';
import { activities, clubInfo } from '../data/clubData';
import { Trophy, Gift, Users, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export default function ActivitiesSection() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return Trophy;
      case 1: return Gift;
      case 2: return Users;
      default: return Sparkles;
    }
  };

  return (
    <section id="aktivitaeten" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-lions-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lions-gold">
            Aktivitäten & Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Wie wir Spenden und Aufmerksamkeit generieren
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Mit eigenen Benefiz-Events, Sponsoring-Partnerschaften und tatkräftigem Anpacken sammeln wir Gelder für die Düsseldorfer Förderprojekte.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((act, index) => {
            const Icon = getIcon(index);
            const isGolf = act.highlight;

            return (
              <div
                key={act.title}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isGolf
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-lions-gold/80 shadow-xl shadow-amber-950/20 lg:-translate-y-2'
                    : 'bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isGolf ? 'bg-lions-gold text-lions-navy' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {act.badge}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isGolf ? 'bg-lions-gold/20 text-lions-gold' : 'bg-slate-700 text-slate-300'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {act.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {act.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed pt-2">
                    {act.details}
                  </p>
                </div>

                {/* Link Action */}
                <div className="pt-6 mt-6 border-t border-slate-700/80">
                  {act.isExternal ? (
                    <a
                      href={act.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full bg-lions-gold hover:bg-lions-goldLight text-lions-navy font-bold text-sm px-4 py-3 rounded-xl transition-all shadow"
                    >
                      <span>{act.linkText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={act.linkUrl}
                      className="inline-flex items-center gap-2 text-sm font-bold text-lions-gold hover:text-amber-300 transition-colors"
                    >
                      <span>{act.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Teaser for the Golf Tournament Satellite Site */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-800 to-slate-900 border border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
              <span>Golfturnier-Spezialseite</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Besuchen Sie unser offizielles Charity Golfturnier Portal
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Ausführliche Turnierberichte, Siegerehrungen, Fotogalerien aller vergangenen Jahre, Sponsorenvorstellung und Online-Anmeldeformulare finden Sie auf unserer separaten Turnierseite.
            </p>
          </div>

          <a
            href={clubInfo.satelliteSites.golf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl whitespace-nowrap shadow-lg shadow-emerald-950/40 transition-all hover:scale-105"
          >
            <span>golfturnier.lc-janwellem.de</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
