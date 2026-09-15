"use client";

import React from "react";

import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Users,
  HeartHandshake,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  ArchSilhouetteWatermark,
} from "./IslamicElements";

import { SlideItem } from "./Hero";

export interface HeroClientProps {
  slides: SlideItem[];

  currentIndex: number;

  loading: boolean;

  onOpenPpdb: () => void;

  onOpenVisit: () => void;

  onSelectIndex?: (index: number) => void;
}

const defaultHeroBgImage = "/images/hero_new_bg.jpg";

export const HeroClient: React.FC<HeroClientProps> = ({
  slides,

  currentIndex,

  loading,

  onOpenPpdb,

  onOpenVisit,

  onSelectIndex,
}) => {
  const activeSlide = slides[currentIndex] || {
    title: "",

    mediaUrl: defaultHeroBgImage,

    mediaType: "image",
  };

  const handlePrev = () => {
    if (onSelectIndex) {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;

      onSelectIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (onSelectIndex) {
      const newIndex = (currentIndex + 1) % slides.length;

      onSelectIndex(newIndex);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0d2e20]">
      {/* Background Media (Image or Video) with clean, natural lighting */}

      <div className="absolute inset-0 z-0">
        {loading ? (
          <div className="w-full h-full bg-[#0d2e20] animate-pulse" />
        ) : activeSlide.mediaType === "video" ? (
          <video
            src={activeSlide.mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center scale-105 filter brightness-[1.05] contrast-[1.05] transition-all duration-1000 ease-in-out"
          />
        ) : (
          <img
            src={activeSlide.mediaUrl}
            alt={
              activeSlide.title ||
              "Siswa-siswi MTs Asih Putera berdiskusi dan belajar aktif di kelas madrasah"
            }
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[1.05] contrast-[1.05] transition-all duration-1000 ease-in-out"
          />
        )}

        {/* Clean Vignette: Gradasi gelap hanya di area kiri belakang teks agar mudah dibaca, sisi kanan bersih */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20"></div>
      </div>

      {/* Islamic Background Texture Overlay */}

      <IslamicCanvasWatermark
        opacityClass="opacity-[0.03]"
        colorClass="text-[#e5a93c]"
      />

      {/* Subtle Arch Silhouette on Right */}

      <ArchSilhouetteWatermark
        position="right"
        className="opacity-[0.04] text-white"
      />

      {/* Hero Content Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-10 md:pb-16">
        <div className="max-w-2xl text-white">
          {/* Top small title */}

          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rotate-45 bg-[#d49b28]"></span>

            <span className="font-sans font-bold text-lg sm:text-xl text-[#d49b28] tracking-wide drop-shadow-md">
              MTs Asih Putera
            </span>

            <span className="w-2 h-2 rotate-45 bg-[#d49b28]"></span>

            {slides.length > 1 && (
              <span className="ml-2 text-xs bg-black/40 border border-[#d49b28]/30 px-2 py-0.5 rounded-full text-[#f6d899]">
                {currentIndex + 1} / {slides.length}
              </span>
            )}
          </div>

          {/* Main Headline */}

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.08] font-extrabold text-white mb-3.5 tracking-tight drop-shadow-md transition-all duration-500">
            {activeSlide.title && activeSlide.title.trim() !== ""
              ? activeSlide.title
              : "Membentuk Generasi Unggul, Berakhlak Mulia, dan Berdaya Saing Global"}
          </h1>

          {/* Subheading description */}

          <p className="text-gray-100 text-sm sm:text-base md:text-[17px] leading-relaxed mb-6 font-normal max-w-xl drop-shadow-md">
            Menyelenggarakan pendidikan Islam terpadu yang mengintegrasikan
            kecerdasan spiritual, ketajaman intelektual, kepemimpinan
            transformatif, serta kemandirian untuk menghadapi tantangan masa
            depan.
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPpdb}
              className="bg-[#0b5433] hover:bg-[#073c24] border border-[#197548] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Informasi PPDB</span>

              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-visit-cta"
              onClick={onOpenVisit}
              className="bg-black/35 hover:bg-black/50 backdrop-blur-xs border border-[#d49b28]/80 text-[#f6d899] hover:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-md transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
            >
              <span>Jadwalkan Kunjungan</span>

              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Feature highlight pills horizontal bar */}

        <div className="relative mt-1 max-w-2xl bg-white/95 backdrop-blur-md rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 shadow-xl border border-white/80 overflow-hidden">
          <TazhibCompactCorner
            position="top-left"
            color="#0a4b2f"
            accentColor="#c89635"
            className="opacity-75"
          />

          <TazhibCompactCorner
            position="top-right"
            color="#0a4b2f"
            accentColor="#c89635"
            className="opacity-75"
          />

          <TazhibCompactCorner
            position="bottom-left"
            color="#0a4b2f"
            accentColor="#c89635"
            className="opacity-75"
          />

          <TazhibCompactCorner
            position="bottom-right"
            color="#0a4b2f"
            accentColor="#c89635"
            className="opacity-75"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200/90 relative z-10">
            {/* 1 */}

            <div className="flex flex-col items-center justify-center py-1 px-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <ShieldCheck
                  className="w-5.5 h-5.5 sm:w-6 sm:h-6"
                  strokeWidth={2}
                />
              </div>

              <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                TAUHID & AKHLAK
              </span>
            </div>

            {/* 2 */}

            <div className="flex flex-col items-center justify-center py-1 px-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <BookOpen
                  className="w-5.5 h-5.5 sm:w-6 sm:h-6"
                  strokeWidth={2}
                />
              </div>

              <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                ACADEMIC EXCELLENCE
              </span>
            </div>

            {/* 3 */}

            <div className="flex flex-col items-center justify-center py-1 px-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <Users className="w-5.5 h-5.5 sm:w-6 sm:h-6" strokeWidth={2} />
              </div>

              <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                LEADERSHIP & LIFE SKILLS
              </span>
            </div>

            {/* 4 */}

            <div className="flex flex-col items-center justify-center py-1 px-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <HeartHandshake
                  className="w-5.5 h-5.5 sm:w-6 sm:h-6"
                  strokeWidth={2}
                />
              </div>

              <span className="text-[10px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                KOLABORASI ORANG TUA
              </span>
            </div>
          </div>
        </div>

        {/* Floating badge bottom-right */}

        <div className="relative mt-4 md:mt-0 md:absolute md:bottom-6 md:right-8 inline-flex items-center gap-3 bg-[#073822]/95 backdrop-blur-md border border-[#16653e] text-white px-4 py-2.5 rounded-xl shadow-xl overflow-hidden">
          <TazhibCompactCorner
            position="top-right"
            color="#e5a93c"
            accentColor="#16653e"
          />

          <TazhibCompactCorner
            position="bottom-left"
            color="#e5a93c"
            accentColor="#16653e"
          />

          <div className="w-8 h-8 rounded-full bg-[#0e5032] flex items-center justify-center text-[#e5a93c] relative z-10">
            <Heart className="w-3.5 h-3.5 fill-[#e5a93c]" />
          </div>

          <div className="text-left relative z-10">
            <p className="text-xs font-semibold text-white leading-tight">
              Belajar dengan Hati,
            </p>

            <p className="text-[10px] text-gray-300">Bertumbuh dengan Makna</p>
          </div>
        </div>

        {/* Slider Navigation Controls (Manual Buttons & Dots) */}

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-4 sm:left-8 z-20 flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}

            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onSelectIndex && onSelectIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-6 bg-[#e5a93c]"
                      : "w-2 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
