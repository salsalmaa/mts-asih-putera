import React, { useState } from 'react';
import { IslamicOuterFrame } from './components/IslamicOuterFrame';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { WhyUsSection } from './components/WhyUsSection';
import { OutcomesSection } from './components/OutcomesSection';
import { PillarsSection } from './components/PillarsSection';
import { LearningJourney } from './components/LearningJourney';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { PartnershipAndQuality } from './components/PartnershipAndQuality';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { SectionDividerFiligree } from './components/IslamicElements';

// Modals & Floating Tools
import { PpdbModal } from './components/Modals/PpdbModal';
import { VisitScheduleModal } from './components/Modals/VisitScheduleModal';
import { ProgramDetailModal } from './components/Modals/ProgramDetailModal';
import { AllProgramsModal } from './components/Modals/AllProgramsModal';
import { FacilityDetailModal } from './components/Modals/FacilityDetailModal';
import { NewsDetailModal } from './components/Modals/NewsDetailModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { ProgramItem, FacilityItem, NewsItem } from './types';
import { PROGRAMS_DATA, ALL_PROGRAMS_DATA, NEWS_DATA } from './data/schoolData';

export default function App() {
  const [isPpdbOpen, setIsPpdbOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isAllProgramsOpen, setIsAllProgramsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const handleOpenPpdb = () => {
    setIsPpdbOpen(true);
  };

  const handleOpenVisit = () => {
    setIsVisitOpen(true);
  };

  const handleSelectProgram = (program: ProgramItem) => {
    setSelectedProgram(program);
  };

  const handleOpenAllPrograms = () => {
    setIsAllProgramsOpen(true);
  };

  const handleSelectFacility = (facility: FacilityItem) => {
    setSelectedFacility(facility);
  };

  const handleSelectNews = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const handleOpenAllNews = () => {
    setSelectedNews(NEWS_DATA[0]);
  };

  return (
    <IslamicOuterFrame>
      {/* 1. Header with Top Green Bar & Sticky Navigation */}
      <Header
        onOpenPpdb={handleOpenPpdb}
        onOpenVisit={handleOpenVisit}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Background, Headline, Buttons & Feature Highlights */}
        <Hero
          onOpenPpdb={handleOpenPpdb}
          onOpenVisit={handleOpenVisit}
        />

        {/* 3. 6 Key Statistics Bar */}
        <StatsBar />

        {/* 4. Mengapa MTs Asih Putera? (4 Major Feature Cards) */}
        <WhyUsSection />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 5. 4 Hasil Utama Pendidikan MTs Asih Putera */}
        <OutcomesSection />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 6. 6 Pilar Pendidikan Asih Putera */}
        <PillarsSection />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 7. Perjalanan Belajar Siswa MTs (Kelas 7, 8, 9) */}
        <LearningJourney />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 8. Program Unggulan yang Menghidupkan Nilai + Prestasi Card */}
        <FeaturedPrograms
          onSelectProgram={handleSelectProgram}
          onOpenAllPrograms={handleOpenAllPrograms}
        />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 9. Kemitraan Orang Tua + AKREDITASI A Seal + Sistem Mutu */}
        <PartnershipAndQuality />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 10. Fasilitas & Kehidupan Siswa (6 Cards Gallery) */}
        <FacilitiesSection
          onSelectFacility={handleSelectFacility}
        />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 11. Apa Kata Orang Tua & Siswa? (3 Testimonials with gold 99 badge) */}
        <TestimonialsSection />

        <SectionDividerFiligree color="#0a4b2f" />

        {/* 12. Berita, Agenda & Galeri (3 Events with green date banners) */}
        <NewsSection
          onSelectNews={handleSelectNews}
          onOpenAllNews={handleOpenAllNews}
        />

        {/* 13. Call-to-Action Banner & Quick Consultation */}
        <CtaBanner
          onOpenPpdb={handleOpenPpdb}
          onOpenVisit={handleOpenVisit}
        />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer
        onOpenPpdb={handleOpenPpdb}
        onOpenVisit={handleOpenVisit}
      />

      {/* Interactive Modals */}
      <PpdbModal
        isOpen={isPpdbOpen}
        onClose={() => setIsPpdbOpen(false)}
      />

      <VisitScheduleModal
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
      />

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenPpdb={handleOpenPpdb}
      />

      <AllProgramsModal
        isOpen={isAllProgramsOpen}
        onClose={() => setIsAllProgramsOpen(false)}
        onSelectProgram={handleSelectProgram}
        programs={ALL_PROGRAMS_DATA}
      />

      <FacilityDetailModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
        onOpenPpdb={handleOpenPpdb}
      />

      {/* Floating WhatsApp Consultation Tool */}
      <WhatsAppFloatingButton
        onOpenPpdb={handleOpenPpdb}
        onOpenVisit={handleOpenVisit}
      />
    </IslamicOuterFrame>
  );
}


