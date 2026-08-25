import React from 'react';
import { clubInfo } from '../data/clubData';
import { Heart, ExternalLink, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Club Brand & Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={clubInfo.images.logo}
                alt={clubInfo.name}
                className="h-14 w-auto object-contain bg-white/90 p-1 rounded-lg"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {clubInfo.description}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Gegründet:</strong> 1984 in Düsseldorf</p>
              <p><strong className="text-slate-300">Präsident:</strong> {clubInfo.board.president}</p>
              <p><strong className="text-slate-300">Distrikt:</strong> 111-Rheinland, Region III, Zone 3 (Club-Nr. {clubInfo.clubNumber})</p>
              <p><strong className="text-slate-300">Förderverein:</strong> {clubInfo.foerderverein.register}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#ueber-uns" className="hover:text-lions-gold transition-colors">Über uns & Geschichte seit 1984</a></li>
              <li><a href="#foerderprojekte" className="hover:text-lions-gold transition-colors">Düsseldorfer Förderprojekte</a></li>
              <li><a href="#aktivitaeten" className="hover:text-lions-gold transition-colors">Aktivitäten & Aktionen</a></li>
              <li><a href="#spenden" className="hover:text-lions-gold transition-colors">Förderverein & Spenden</a></li>
              <li><a href="#kontakt" className="hover:text-lions-gold transition-colors">Kontakt & Clubführung</a></li>
            </ul>
          </div>

          {/* Col 3: Satellites & Shop */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Verbundene Portale</h4>
            
            <div className="space-y-2.5">
              <a
                href={clubInfo.satelliteSites.golf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 group transition-all"
              >
                <div>
                  <span className="block text-xs font-bold text-emerald-400">Turnier-Webseite</span>
                  <span className="block text-sm font-bold text-white group-hover:text-emerald-300">14. Charity Golfturnier 2026</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href={clubInfo.foerderverein.sumupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-lions-gold/50 group transition-all"
              >
                <div>
                  <span className="block text-xs font-bold text-lions-gold">Online-Spenden</span>
                  <span className="block text-sm font-bold text-white group-hover:text-lions-gold">Förderverein SumUp-Shop</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-lions-gold transition-colors" />
              </a>

              <a
                href="https://www.lionsclubs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400/50 group transition-all"
              >
                <div>
                  <span className="block text-xs font-bold text-blue-400">Weltweite Organisation</span>
                  <span className="block text-sm font-bold text-white group-hover:text-blue-300">Lions Clubs International</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {clubInfo.name} e.V. • Gegründet 1984</span>
            <span className="hidden sm:inline">•</span>
            <span>Umsetzung: <a href="https://www.lichtundcode.de" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-lions-gold transition-colors font-medium">Licht & Code</a></span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-slate-300 hover:underline transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-slate-300 hover:underline transition-colors"
            >
              Datenschutz (100% Cookie-frei)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
