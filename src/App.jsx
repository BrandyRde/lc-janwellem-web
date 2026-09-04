import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactBar from './components/ImpactBar';
import LegalModals from './components/LegalModals';

// Below-the-fold sections loaded lazily (code splitting)
const Philosophy = lazy(() => import('./components/Philosophy'));
const LionsOrganizationSection = lazy(() => import('./components/LionsOrganizationSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ActivitiesSection = lazy(() => import('./components/ActivitiesSection'));
const DonationSection = lazy(() => import('./components/DonationSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const PrivacyBadge = lazy(() => import('./components/PrivacyBadge'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading fallback placeholder
function SectionSkeleton() {
  return <div className="py-16 bg-slate-50 animate-pulse" aria-hidden="true" />;
}

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'impressum' | 'datenschutz' | null

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">

      {/* Skip-to-Content Link (Barrierefreiheit) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-lions-gold focus:text-lions-navy focus:font-bold focus:rounded-lg focus:shadow-lg"
      >
        Direkt zum Inhalt
      </a>

      {/* Header Navbar */}
      <Header onOpenLegal={setActiveLegalModal} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section – always eagerly loaded (above the fold) */}
        <Hero />

        {/* Impact Bar – eagerly loaded (just below fold) */}
        <ImpactBar />

        {/* Below-the-fold sections – lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          {/* Philosophy & Club Story */}
          <Philosophy />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* Lions Organization Infobox */}
          <LionsOrganizationSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* Core Charity Projects */}
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* Club Activities & Golf Teaser */}
          <ActivitiesSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* Donations & Förderverein */}
          <DonationSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* FAQ Section */}
          <FaqSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          {/* Contact Section */}
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* Privacy Guarantee Badge */}
        <PrivacyBadge onOpenPrivacy={() => setActiveLegalModal('datenschutz')} />

        {/* Footer */}
        <Footer onOpenLegal={setActiveLegalModal} />
      </Suspense>

      {/* Legal Modals (Impressum / Datenschutz) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
