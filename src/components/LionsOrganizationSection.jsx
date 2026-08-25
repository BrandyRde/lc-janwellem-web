import React from 'react';
import { clubInfo } from '../data/clubData';
import { Globe, Users, Award, Shield, ExternalLink, Heart, Sparkles, Compass, Eye } from 'lucide-react';

export default function LionsOrganizationSection() {
  const org = clubInfo.organization;

  const keyFacts = [
    { value: "1,4+ Mio.", label: "Mitglieder weltweit", sub: "In über 200 Ländern & Regionen" },
    { value: "1917", label: "Gegründet", sub: "Von Melvin Jones in Chicago" },
    { value: "51.000", label: "Lions in Deutschland", sub: "In über 1.580 aktiven Clubs" },
    { value: "UN-Status", label: "Konsultarstatus", sub: "Bei den Vereinten Nationen" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-lions-navy to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lions-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-lions-gold/40 text-lions-gold text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md">
            <Globe className="w-4 h-4 text-lions-gold" />
            <span>Lions Clubs International • Lions Deutschland</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wer sind die Lions?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Unter dem weltweiten Leitmotiv <strong className="text-lions-gold">„We Serve: Wir helfen“</strong> engagieren sich Menschen ehrenamtlich dort, wo Hilfe gebraucht wird – in der Nachbarschaft, in unserer Stadt Düsseldorf und auf der ganzen Welt.
          </p>
        </div>

        {/* Global Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-lions-gold/50 transition-colors space-y-1.5"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-lions-gold tracking-tight block">
                {fact.value}
              </span>
              <span className="text-sm font-bold text-white block">
                {fact.label}
              </span>
              <span className="text-xs text-slate-400 block">
                {fact.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 2-Column Story & Focus Areas */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Organization Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Die mitgliederstärkste Hilfsorganisation der Welt
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Seit über 100 Jahren steht Lions Clubs International für bürgerschaftliches Engagement, Völkerverständigung und den unermüdlichen Einsatz für Menschen in Not. Als neutrale und überparteiliche Organisation sind Lions dort im Einsatz, wo staatliche Hilfe an Grenzen stößt.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In Deutschland bilden über <strong>51.000 engagierte Frauen und Männer</strong> in 1.580 Clubs ein starkes Netzwerk der Menschlichkeit. Unser <strong>Lions Club Düsseldorf-Jan-Wellem</strong> (Distrikt 111-Rheinland) ist stolzer Botschafter dieser gemeinsamen Werte direkt vor Ort in unserer Landeshauptstadt.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={org.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lions-gold hover:bg-lions-goldLight text-lions-navy font-extrabold px-5 py-3 rounded-xl text-sm transition-all shadow hover:scale-105"
                >
                  <span>Ausführliches Porträt auf lions.de</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={org.internationalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3 rounded-xl text-sm border border-white/20 transition-colors"
                >
                  <span>Lions International</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Global Pillars */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {org.coreFields.map((field, idx) => {
              const icons = [Users, Eye, Heart, Globe];
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={field.title}
                  className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 hover:bg-slate-800/80 hover:border-lions-gold/40 transition-all space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-lions-gold/20 text-lions-gold flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">
                    {field.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {field.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
