import React from 'react';
import { impactStats } from '../data/clubData';
import { Award, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function ImpactBar() {
  const icons = [ShieldCheck, HeartHandshake, Users, Award];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {impactStats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={stat.label} className={`flex flex-col items-center text-center ${index > 0 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-amber-50 text-lions-gold flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-lions-navy tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 max-w-[200px]">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
