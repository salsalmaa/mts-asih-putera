"use client";
import React, { useState, useEffect } from "react";
import { IslamicOuterFrame } from "../components/IslamicOuterFrame";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { StatsBar } from "../components/StatsBar";
import { WhyUsSection } from "../components/WhyUsSection";
import { OutcomesSection } from "../components/OutcomesSection";
import { PillarsSection } from "../components/PillarsSection";
import { LearningJourney } from "../components/LearningJourney";
import { FeaturedPrograms } from "../components/FeaturedPrograms";
import { PartnershipAndQuality } from "../components/PartnershipAndQuality";
import { FacilitiesSection } from "../components/FacilitiesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { NewsSection } from "../components/NewsSection";
import { CtaBanner } from "../components/CtaBanner";
import { Footer } from "../components/Footer";
import { SectionDividerFiligree } from "../components/IslamicElements";

// Modals & Floating Tools
import { PpdbModal } from "../components/Modals/PpdbModal";
import { VisitScheduleModal } from "../components/Modals/VisitScheduleModal";
import { ProgramDetailModal } from "../components/Modals/ProgramDetailModal";
import { AllProgramsModal } from "../components/Modals/AllProgramsModal";
import { FacilityDetailModal } from "../components/Modals/FacilityDetailModal";
import { NewsDetailModal } from "../components/Modals/NewsDetailModal";
import { WhatsAppFloatingButton } from "../components/WhatsAppFloatingButton";

import { ProgramItem, FacilityItem, NewsItem } from "../types";
import {
  ALL_PROGRAMS_DATA,
  NEWS_DATA,
} from "../data/schoolData";

// API Service
import { loginService } from "../services/loginServices";
import { featuredProgramsService } from "../services/featuredProgramsServices";

export default function Home() {
  const [isPpdbOpen, setIsPpdbOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isAllProgramsOpen, setIsAllProgramsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(
    null,
  );
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(
    null,
  );
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // State untuk menampung data program dari API agar bisa dishare ke FeaturedPrograms & AllProgramsModal
  const [programsList, setProgramsList] = useState<ProgramItem[]>([]);

  // Kode uji coba API Login & Fetch Programs
  useEffect(() => {
    loginService.login();

    const fetchAllPrograms = async () => {
      try {
        const responseData = await featuredProgramsService.getFeaturedPrograms();
        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];
        
        const formattedPrograms: ProgramItem[] = rawData.map((item: any, index: number) => {
          const rawDesc = item.Content || item.Description || item.ShortDescription || '';
          const cleanDesc = rawDesc.replace(/<\/?[^>]+(>|$)/g, "");

          return {
            id: item.ContentId || index + 1,
            title: item.Title || 'Program Unggulan',
            description: cleanDesc,
            image: item.SignedThumbnail || item.Thumbnail || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
            category: item.Category || '',
            highlights: item.Highlights || [],
          };
        });

        if (formattedPrograms.length > 0) {
          setProgramsList(formattedPrograms);
        }
      } catch (err) {
        console.error('Gagal mengambil data program untuk modal:', err);
      }
    };

    fetchAllPrograms();
  }, []);

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
      <Header onOpenPpdb={handleOpenPpdb} onOpenVisit={handleOpenVisit} />

      <main className="flex-1">
        {/* 2. Hero Section with Background, Headline, Buttons & Feature Highlights */}
        <Hero onOpenPpdb={handleOpenPpdb} onOpenVisit={handleOpenVisit} />

        {/* 3. 6 Key Statistics Bar */}
        <StatsBar />

        {/* 4. Mengapa MTs Asih Putera? (4 Major Feature Cards) */}
        <WhyUsSection />

        <SectionDividerFiligree  />

        {/* 5. 4 Hasil Utama Pendidikan MTs Asih Putera */}
        <OutcomesSection />

        <SectionDividerFiligree  />

        {/* 6. 6 Pilar Pendidikan Asih Putera */}
        <PillarsSection />

        <SectionDividerFiligree  />

        {/* 7. Perjalanan Belajar Siswa MTs (Kelas 7, 8, 9) */}
        <LearningJourney />

        <SectionDividerFiligree  />

        {/* 8. Program Unggulan yang Menghidupkan Nilai + Prestasi Card */}
        <FeaturedPrograms
          onSelectProgram={handleSelectProgram}
          onOpenAllPrograms={handleOpenAllPrograms}
        />

        <SectionDividerFiligree  />

        {/* 9. Kemitraan Orang Tua + AKREDITASI A Seal + Sistem Mutu */}
        <PartnershipAndQuality />

        <SectionDividerFiligree  />

        {/* 10. Fasilitas & Kehidupan Siswa (6 Cards Gallery) */}
        <FacilitiesSection onSelectFacility={handleSelectFacility} />

        <SectionDividerFiligree  />

        {/* 11. Apa Kata Orang Tua & Siswa? (3 Testimonials with gold 99 badge) */}
        <TestimonialsSection />

        <SectionDividerFiligree  />

        {/* 12. Berita, Agenda & Galeri (3 Events with green date banners) */}
        <NewsSection
          onSelectNews={handleSelectNews}
          onOpenAllNews={handleOpenAllNews}
        />

        {/* 13. Call-to-Action Banner & Quick Consultation */}
        <CtaBanner onOpenPpdb={handleOpenPpdb} onOpenVisit={handleOpenVisit} />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer onOpenPpdb={handleOpenPpdb} onOpenVisit={handleOpenVisit} />

      {/* Interactive Modals */}
      <PpdbModal isOpen={isPpdbOpen} onClose={() => setIsPpdbOpen(false)} />

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
        programs={programsList.length > 0 ? programsList : ALL_PROGRAMS_DATA}
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