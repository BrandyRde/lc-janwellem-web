import React, { useState } from 'react';
import { faqList } from '../data/clubData';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-lions-gold" />
            <span>Häufige Fragen & Antworten</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-lions-navy tracking-tight">
            Transparenz & Wissenswertes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Hier finden Sie verlässliche Antworten zu Spenden, steuerlicher Absetzbarkeit, Clubabenden und unserem gesellschaftlichen Engagement in Düsseldorf.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            const faqId = `faq-answer-${idx}`;
            const buttonId = `faq-question-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-200 hover:border-lions-gold/60"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-lions-navy hover:text-lions-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lions-gold rounded-2xl"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'bg-lions-gold/20 text-lions-navy rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={faqId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA if question wasn't answered */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-lions-gold flex items-center justify-center shrink-0">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-lions-navy text-sm sm:text-base">Ihre Frage war nicht dabei?</p>
              <p className="text-xs sm:text-sm text-slate-500">Wir antworten Ihnen gerne persönlich auf Ihre Nachricht.</p>
            </div>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-lions-navy hover:bg-slate-800 text-lions-gold font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <span>Nachricht an den Club</span>
          </a>
        </div>

      </div>
    </section>
  );
}
