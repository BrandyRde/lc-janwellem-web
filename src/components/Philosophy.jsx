import React from 'react';
import { clubInfo, clubValues } from '../data/clubData';
import { Heart, Compass, Shield, Users, Landmark, Award, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  const valueIcons = [Compass, Shield, Landmark, Users];

  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lions-gold">
            Über unseren Club
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lions-navy tracking-tight">
            Tradition, Werte & bürgerschaftliches Engagement
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Seit 1984 vereint der <strong className="text-slate-800">{clubInfo.name}</strong> Persönlichkeiten aus unterschiedlichsten Bereichen, die sich ehrenamtlich für das Wohl unserer Heimatstadt einsetzen.
          </p>
        </div>

        {/* 2-Column: 1984 Founding History & Club Identity */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Historic 1984 Founding Photo */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200 group">
              <picture>
                <source srcSet={clubInfo.images.founding1984} type="image/webp" />
                <img
                  src={clubInfo.images.founding1984Fallback}
                  alt="Gründungsfeier des Lions Club Düsseldorf-Jan-Wellem im Jahr 1984"
                  width="1024"
                  height="705"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-lions-gold uppercase tracking-wider block">Historische Charterfeier</span>
                  <p className="text-base font-bold">Gründung in Düsseldorf 1984</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-lions-navy/90 text-lions-gold text-xs font-bold border border-lions-gold/40">
                  Über 40 Jahre aktiv
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic text-center">
              Die Gründungsmitglieder bei der feierlichen Charterübergabe des Lions Club Düsseldorf-Jan-Wellem im Jahr 1984.
            </p>
          </div>

          {/* Right Column: Key Story & Bullet Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-lions-gold" />
                <span>Namenspatron Kurfürst Jan Wellem (1658–1716)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-lions-navy leading-tight">
                Vier Jahrzehnte Einsatz für die Schwächsten in unserer Stadt
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Benannt nach dem volksnahen Kurfürsten Jan Wellem, der Düsseldorf zu einer blühenden Metropole formte, steht unser Club für gelebte bürgerschaftliche Verantwortung.
              </p>
            </div>

            {/* Quick Fact Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">100% Spendenweitergabe</strong>
                  <span className="text-xs sm:text-sm text-slate-600">Kein Cent Verwaltungskosten – sämtliche Clubaufwendungen tragen die Mitglieder privat.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">Direkte Hilfe vor Ort</strong>
                  <span className="text-xs sm:text-sm text-slate-600">Fokus auf Düsseldorfer Kinderhilfezentren, Bekämpfung von Kinderarmut und Sportförderung.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">Erfolgreiche Benefiz-Initiativen</strong>
                  <span className="text-xs sm:text-sm text-slate-600">Über 100.000 € Erlös allein durch das Charity Golfturnier plus unzählige weitere Hilfen.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {clubValues.map((value, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            return (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-lions-gold/50 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-lions-gold flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lions-navy text-base">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Club Meeting & Leadership Card */}
        <div className="bg-gradient-to-r from-lions-navy to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-lions-gold font-bold">Clubführung & Clubabende</span>
            <h3 className="text-xl font-bold">Präsident: {clubInfo.board.president}</h3>
            <p className="text-xs text-slate-300">
              <strong className="text-lions-gold">Treffpunkt:</strong> {clubInfo.meetings.schedule} im <strong>{clubInfo.meetings.location}</strong> (am Kö-Bogen).
            </p>
            <p className="text-xs text-slate-400">
              Interessenten und Gäste sind nach vorheriger Kontaktaufnahme herzlich willkommen.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-lions-gold hover:bg-lions-goldLight text-lions-navy font-extrabold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg hover:scale-105"
          >
            <span>Gastabend anfragen</span>
          </a>
        </div>

      </div>
    </section>
  );
}
