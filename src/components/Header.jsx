import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ExternalLink } from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function Header({ onOpenLegal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Förderprojekte', href: '#foerderprojekte' },
    { label: 'Aktivitäten', href: '#aktivitaeten' },
    { label: 'Förderverein & Spenden', href: '#spenden' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Club Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={clubInfo.images.logo}
              alt={clubInfo.name}
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-lions-blue transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lions-gold hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* Golf Satellite Portal Link */}
            <a
              href={clubInfo.satelliteSites.golf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 transition-colors"
              title="Zum separaten Charity Golfturnier Portal"
            >
              <span>Charity Golf</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Donate CTA Button */}
            <a
              href="#spenden"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-lions-gold text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow hover:brightness-105 active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 fill-white/80" />
              <span>Spenden</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#spenden"
              className="inline-flex items-center gap-1 bg-lions-navy text-lions-gold text-xs font-bold px-3 py-2 rounded-lg"
            >
              <Heart className="w-3.5 h-3.5 fill-lions-gold" />
              <span>Spenden</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-lions-blue rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={clubInfo.satelliteSites.golf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold text-sm"
            >
              <span>14. Charity Golfturnier 2026 Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#spenden"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-lions-navy text-lions-gold font-bold py-3 rounded-lg shadow"
            >
              <Heart className="w-4 h-4 fill-lions-gold" />
              <span>Förderverein & Spenden</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-500">
            <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('impressum'); }} className="hover:underline">Impressum</button>
            <span>•</span>
            <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('datenschutz'); }} className="hover:underline">Datenschutz (100% Cookie-frei)</button>
          </div>
        </div>
      )}
    </header>
  );
}
