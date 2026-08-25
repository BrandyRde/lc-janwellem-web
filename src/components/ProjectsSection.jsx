import React, { useState } from 'react';
import { projects } from '../data/clubData';
import { Home, Heart, Activity, Smile, ExternalLink, ArrowRight, CheckCircle, Sparkles, X } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return Home;
      case 'Heart': return Heart;
      case 'Activity': return Activity;
      case 'Smile': return Smile;
      default: return Heart;
    }
  };

  return (
    <section id="foerderprojekte" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-lions-gold">
            Unsere Förderprojekte
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lions-navy tracking-tight">
            Hilfe, die direkt bei Düsseldorfer Kindern ankommt
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Wir wählen unsere Partnerprojekte sorgfältig aus und begleiten sie langfristig. Hier sehen Sie die Einrichtungen, die wir aktuell mit Herzblut und finanziellen Mitteln unterstützen.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = getIcon(project.icon);
            return (
              <div
                key={project.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-lions-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/60">
                      {project.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-lions-navy text-lions-gold shadow-sm flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    {project.badge && (
                      <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full mb-1">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-lions-navy group-hover:text-lions-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Budenfest Highlight Box (for Kinderhilfezentrum) */}
                  {project.budenfest && (
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-amber-900">
                        <Sparkles className="w-3.5 h-3.5 text-lions-gold" />
                        <span>Tradition im September: Großes Budenfest</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        Unser Lions Club ist bei jedem Budenfest mit vollem Einsatz dabei und unterstützt die Eulerstraße aktiv mit unserem traditionellen Kuchenverkauf.
                      </p>
                    </div>
                  )}

                  {/* Impact Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-xs sm:text-sm text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-lions-gold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Unser Förderschwerpunkt</span>
                    </div>
                    <p className="text-slate-600">{project.impact}</p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-lions-navy hover:text-lions-gold transition-colors"
                  >
                    <span>Details & Geschichte lesen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <span>Webseite</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-amber-50/60 border border-amber-200/60 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto space-y-3">
          <h4 className="text-lg font-bold text-lions-navy">Haben Sie eine Projektidee oder möchten Sie mithelfen?</h4>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Wir prüfen regelmäßig Förderanträge von gemeinnützigen Düsseldorfer Trägern mit Fokus auf Kinder-, Jugend- und Familienhilfe.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-lions-navy hover:bg-slate-900 text-lions-gold text-sm font-bold px-5 py-2.5 rounded-xl shadow transition-all"
          >
            <span>Projekt vorschlagen / Kontakt aufnehmen</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-lions-gold">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-lions-navy">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>{selectedProject.fullDesc}</p>
              
              {selectedProject.budenfest && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                  <h5 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-lions-gold" />
                    <span>Jährliches Highlight: Das Budenfest im September</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.budenfest} In enger Kooperation mit dem <strong>Freundeskreis des Städtischen Kinderhilfezentrums Düsseldorf e.V.</strong> unterstützen wir dieses Fest seit Jahrzehnten als fester Bestandteil des Düsseldorfer Terminkalenders.
                  </p>
                </div>
              )}

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h5 className="font-bold text-lions-navy text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Wirkung & Unterstützung durch den Lions Club</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-600">
                  {selectedProject.impact}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition-colors"
              >
                <span>Zur Projekt-Webseite</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#spenden"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-lions-navy hover:bg-slate-900 px-5 py-2.5 rounded-xl shadow transition-colors"
              >
                <Heart className="w-4 h-4 fill-lions-gold text-lions-gold" />
                <span>Für dieses Projekt spenden</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
