import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactBar from './components/ImpactBar';
import Philosophy from './components/Philosophy';
import LionsOrganizationSection from './components/LionsOrganizationSection';
import ProjectsSection from './components/ProjectsSection';
import ActivitiesSection from './components/ActivitiesSection';
import DonationSection from './components/DonationSection';
import ContactSection from './components/ContactSection';
import PrivacyBadge from './components/PrivacyBadge';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'impressum' | 'datenschutz' | null

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Header Navbar */}
      <Header onOpenLegal={setActiveLegalModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Impact Bar */}
        <ImpactBar />

        {/* Philosophy & Club Story */}
        <Philosophy />

        {/* Lions Organization Infobox */}
        <LionsOrganizationSection />

        {/* Core Charity Projects */}
        <ProjectsSection />

        {/* Club Activities & Golf Teaser */}
        <ActivitiesSection />

        {/* Donations & Förderverein */}
        <DonationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Privacy Guarantee Badge */}
      <PrivacyBadge onOpenPrivacy={() => setActiveLegalModal('datenschutz')} />

      {/* Footer */}
      <Footer onOpenLegal={setActiveLegalModal} />

      {/* Legal Modals (Impressum / Datenschutz) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
