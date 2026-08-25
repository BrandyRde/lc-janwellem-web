import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyBadge({ onOpenPrivacy }) {
  return (
    <div className="bg-slate-900 border-y border-slate-800 text-slate-400 py-3 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-slate-200">100% Cookie-frei & ohne Tracking:</strong> Wir respektieren Ihre Privatsphäre. Diese Webseite speichert keinerlei personenbezogene Cookies und lädt keine externen Tracker.
          </span>
        </div>
        <button
          onClick={onOpenPrivacy}
          className="text-lions-gold hover:text-amber-300 font-semibold underline underline-offset-2 whitespace-nowrap transition-colors"
        >
          Mehr zum Datenschutz erfahren
        </button>
      </div>
    </div>
  );
}
