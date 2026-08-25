import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Award } from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-slate-900 text-white">
      
      {/* Full-Bleed High-Res Background Image (Jan Wellem Statue with Clear Blue Sky) */}
      <div className="absolute inset-0 z-0">
        <img
          src={clubInfo.images.janWellemStatue}
          alt="Kurfürst Jan Wellem Reiterdenkmal Düsseldorf"
          className="w-full h-full object-cover object-[75%_20%] sm:object-[70%_25%] md:object-right-top brightness-100 contrast-100"
        />
        {/* Soft, Light Gradient Overlay: Darker on the left for contrast, bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 sm:via-slate-900/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-900/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="max-w-2xl">
          
          {/* Glassmorphic Content Card for Maximum Legibility on Bright Photo */}
          <div className="bg-slate-950/60 sm:bg-slate-950/45 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6 sm:space-y-7">
            
            {/* Official Badge & Founding Year */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-lions-gold/60 text-lions-gold text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lions-gold animate-pulse" />
              <span>Lions Club Düsseldorf-Jan-Wellem</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-200">Seit 1984</span>
              <span className="text-white/40">•</span>
              <span className="text-lions-goldLight font-extrabold uppercase">We Serve</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white drop-shadow-md">
                Gemeinsam für Düsseldorf.
              </h1>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-lions-gold to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                Engagement, das ankommt.
              </p>
            </div>

            {/* Concise, friendly Subtitle */}
            <p className="text-sm sm:text-lg text-slate-100 font-normal leading-relaxed drop-shadow">
              Seit über 40 Jahren engagieren wir uns ehrenamtlich für bedürftige Kinder und Jugendliche in Düsseldorf – transparent, persönlich und zu 100% gemeinnützig.
            </p>

            {/* Primary Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#foerderprojekte"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-lions-gold to-amber-400 hover:from-amber-400 hover:to-amber-300 text-lions-navy font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xl shadow-amber-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Förderprojekte entdecken</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#spenden"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/40 backdrop-blur-md shadow hover:border-white/60 transition-all"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Spenden & Fördern</span>
              </a>
            </div>

            {/* Satellite Golf Tournament Quick Link */}
            <div className="pt-1">
              <a
                href={clubInfo.satelliteSites.golf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all group"
              >
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px] uppercase tracking-wider">
                  Event
                </span>
                <span>14. Charity Golfturnier 2026 Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-200">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">100% Ehrenamt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">0 € Verwaltungskosten</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Düsseldorfer Kinder</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Bottom Caption for the Statue */}
      <div className="hidden lg:flex absolute bottom-6 right-8 z-10 items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-xs text-slate-200 shadow-lg">
        <Award className="w-3.5 h-3.5 text-lions-gold" />
        <span>Reiterstandbild Kurfürst Jan Wellem • Düsseldorfer Rathaus / Marktplatz</span>
      </div>

    </section>
  );
}
