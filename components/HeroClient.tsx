"use client";

import React from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  IslamicCanvasWatermark,
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
      {/* Background Media dengan pencahayaan yang lebih terang & clean */}
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
            className="w-full h-full object-cover object-center scale-105 filter brightness-[1.12] contrast-[1.03] saturate-[1.05] transition-all duration-1000 ease-in-out"
          />
        ) : (
          <img
            src={activeSlide.mediaUrl}
            alt={activeSlide.title || "Siswa-siswi MTs Asih Putera berdiskusi dan belajar aktif di kelas madrasah"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[1.12] contrast-[1.03] saturate-[1.05] transition-all duration-1000 ease-in-out"
          />
        )}
        
        {/* Soft Vignette: Lebih tipis di sisi kiri agar foto tetap hidup dan terang */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"></div>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-16 md:pb-24">
        <div className="max-w-2xl text-white">
          {/* Top small title */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rotate-45 bg-[#d49b28]"></span>
            <span className="font-sans font-bold text-xs sm:text-sm text-[#d49b28] tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              SEKOLAH PEMBENTUKAN REMAJA
            </span>
            {slides.length > 1 && (
              <span className="ml-2 text-xs bg-black/40 border border-[#d49b28]/30 px-2 py-0.5 rounded-full text-[#f6d899] backdrop-blur-xs">
                {currentIndex + 1} / {slides.length}
              </span>
            )}
          </div>

          {/* Main Headline dengan text-shadow agar kontras di atas gambar terang */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.08] font-extrabold text-white mb-3.5 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-500">
            {activeSlide.title && activeSlide.title.trim() !== ""
              ? activeSlide.title
              : "Mengenal Diri. Menguatkan Prinsip. Menyiapkan Masa Depan."}
          </h1>

          {/* Subheading description */}
          <p className="text-gray-100 text-sm sm:text-base md:text-[17px] leading-relaxed mb-3 font-normal max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            Mendampingi remaja 13-15 tahun menjadi Muslim yang beriman, beradab, berilmu, tangguh, mandiri, dan siap memberi manfaat.
          </p>

          {/* Italic Quote Sub-text */}
          <p className="text-gray-200 text-xs sm:text-sm italic mb-6 max-w-xl border-l-2 border-[#d49b28] pl-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            “Karena di usia remaja, anak tidak hanya membutuhkan sekolah yang pintar mengajar–tetapi lingkungan yang membantu mereka menemukan arah.”
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPpdb}
              className="bg-[#0b5433] hover:bg-[#073c24] border border-[#197548] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Kanal MTs Asih Putera</span>
              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-visit-cta"
              onClick={onOpenVisit}
              className="bg-black/35 hover:bg-black/50 backdrop-blur-xs border border-[#d49b28]/80 text-[#f6d899] hover:text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-md transition-all flex items-center gap-2 cursor-pointer group shadow-sm"
            >
              <span>Jadwalkan School Visit</span>
              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>
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