import React from 'react';
import { PILLARS_DATA } from '../data/schoolData';
import {
  IslamicCanvasWatermark,
  IslamicOrnamentalDivider,
  TazhibCornerOrnament,
} from './IslamicElements';

export const PillarsSection: React.FC = () => {
  // Enhanced detailed Islamic vector icons for all 6 pillars tailored for dark-green theme
  const renderPillarIslamicIcon = (id: string) => {
    switch (id) {
      case 'tauhid-akhlak':
        // Diperbesar tinggi dan proporsinya agar "berat" visualnya setara ikon buku/hati
        return (
          <svg viewBox="0 0 32 32" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield / Perisai Outline - diperluas hingga hampir menyentuh batas atas/bawah */}
            <path
              d="M16 3 C21 3 25 5 27 7 C27 15 25 23 16 29 C7 23 5 15 5 7 C7 5 11 3 16 3 Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.08"
            />
            {/* Checkmark di dalam perisai */}
            <path
              d="M11 15.5 L14.5 19 L21 11.5"
              stroke="#e5a93c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'pendidikan-hati':
        // 2. Pendidikan Sepenuh Hati: Open Quran / book with subtle heart-shaped pages
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rehal (Book stand) base */}
            <path d="M10 27 L22 17 M22 27 L10 17" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" />
            {/* Open book with heart-contoured top arches */}
            <path
              d="M16 11 C14.5 7.5 8 7.5 6 12 C5 14.5 6.5 19 16 23 C25.5 19 27 14.5 26 12 C24 7.5 17.5 7.5 16 11 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.15"
            />
            {/* Central spine fold */}
            <path d="M16 11 V23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            {/* Subtle inner heart bookmark / emblem */}
            <path
              d="M16 14 C15.2 12.5 13 12.5 12.2 13.8 C11.8 14.8 12.6 16.5 16 18.5 C19.4 16.5 20.2 14.8 19.8 13.8 C19 12.5 16.8 12.5 16 14 Z"
              fill="#e5a93c"
            />
          </svg>
        );

      case 'sunda-islami':
        // 3. Karakter Sunda-Islami: Kujang blade silhouette fused with Islamic geometric motif
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kujang distinctive curved spine and belly */}
            <path
              d="M13 5 C15 6.5 18 10 17 14 C16 17 18 19 20 20 C18 21.5 15 21 14 18 C13.5 16.5 11 15 11 11 C11 7.5 13 5 13 5 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.15"
            />
            {/* Kujang Handle / Papatuk */}
            <path d="M14 20 L13 27 C13 27 11 26 10 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {/* 3 Traditional Kujang Eyes / Holes (Mata Kujang) */}
            <circle cx="15" cy="11" r="0.9" fill="#e5a93c" />
            <circle cx="15.5" cy="14" r="0.9" fill="#e5a93c" />
            <circle cx="16" cy="17" r="0.9" fill="#e5a93c" />
            {/* Integrated 8-pointed Islamic Star rosette in background */}
            <g transform="translate(20, 8) scale(0.35)">
              <rect x="0" y="0" width="16" height="16" stroke="#e5a93c" strokeWidth="2" fill="none" />
              <rect x="0" y="0" width="16" height="16" transform="rotate(45 8 8)" stroke="#e5a93c" strokeWidth="2" fill="none" />
              <circle cx="8" cy="8" r="3" fill="#e5a93c" />
            </g>
          </svg>
        );

      case 'kolaborasi-ortu':
        // 4. Kolaborasi Orang Tua: Family / community figures & intertwined supportive hands
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Father / Parent 1 head & torso */}
            <circle cx="11" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.4" />
            <path d="M6 21 C6 17 8 14.5 11 14.5 C12.8 14.5 14 15.5 14.8 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            {/* Mother / Parent 2 head & torso */}
            <circle cx="21" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.4" />
            <path d="M26 21 C26 17 24 14.5 21 14.5 C19.2 14.5 18 15.5 17.2 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            {/* Student / Child figure in center */}
            <circle cx="16" cy="14" r="1.8" stroke="#e5a93c" strokeWidth="1.4" fill="#e5a93c" />
            <path d="M13 23 C13 20 14.3 18.5 16 18.5 C17.7 18.5 19 20 19 23" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" />
            {/* Intertwined / Supporting hands base arch */}
            <path
              d="M5 24 C8 26.5 12 27.5 16 27.5 C20 27.5 24 26.5 27 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Islamic crescent embrace above */}
            <path d="M11 5 C13.5 3.5 18.5 3.5 21 5" stroke="#e5a93c" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />
          </svg>
        );

      case 'future-ready':
        // 5. Future-Ready Education: Digital screen, upward innovation arrow & delicate crescent
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Modern Computer / Tablet Screen */}
            <rect x="5" y="7" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
            {/* Laptop / Screen Stand */}
            <path d="M12 22 L10 26 H22 L20 22" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            {/* Upward Growth / Innovation Arrow */}
            <path
              d="M9 18 L14 13 L17 15 L22 10"
              stroke="#e5a93c"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M18 10 H22 V14" stroke="#e5a93c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Delicate Crescent Moon & Tech Star in screen corner */}
            <path
              d="M23 9.5 C22 9.5 21.2 10.2 21.2 11.2 C21.2 12.2 22 12.9 23 12.9 C21.8 12.9 20.8 12 20.8 11.2 C20.8 10.4 21.8 9.5 23 9.5 Z"
              fill="#e5a93c"
            />
            <circle cx="24" cy="10" r="0.7" fill="#e5a93c" />
          </svg>
        );

      case 'sistem-mutu':
        // 6. Sistem Mutu Pendidikan: Quality certification badge / medal with Islamic 8-pointed star & checkmark
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hanging Medal Ribbons */}
            <path d="M12 20 L10 27 L16 24 L22 27 L20 20" stroke="#e5a93c" strokeWidth="1.3" fill="#e5a93c" fillOpacity="0.25" strokeLinejoin="round" />
            {/* Islamic 8-pointed Star (Rub el Hizb) Outer Medal Shape */}
            <rect x="7" y="5" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="#042416" />
            <rect x="7" y="5" width="18" height="18" rx="1.5" transform="rotate(45 16 14)" stroke="#e5a93c" strokeWidth="1.3" fill="#042416" />
            {/* Inner Ring */}
            <circle cx="16" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1.5 1.5" />
            {/* Centered Quality Verification Checkmark */}
            <path
              d="M13 14 L15.2 16.2 L19.2 11.8"
              stroke="#e5a93c"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 32 32" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" fill="none">
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <section id="kurikulum" className="relative w-full py-14 sm:py-18 bg-[#042416] text-white border-y border-[#0d3f26] overflow-hidden">
      {/* 1. Full Canvas Islamic Geometric Watermark Pattern */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.04]" colorClass="text-[#d49b28]" />

      {/* Decorative ambient lighting glows */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#0f5735]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-[#d49b28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#e5a93c] mb-1.5 font-sans">
            FONDASI NILAI & KARAKTER
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            6 Pilar Pendidikan Asih Putera
          </h2>

          {/* Ornamental Islamic Filigree Divider */}
          <IslamicOrnamentalDivider className="mt-3" color="#e5a93c" />
        </div>

        {/* 2. Single Cohesive Horizontal Container / Bar Structure */}
        <div className="bg-[#06331e]/95 border border-[#16603b] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xs relative group/container">
          {/* Tazhib filigree corner flourishes */}
          <TazhibCornerOrnament position="top-left" className="opacity-25" />
          <TazhibCornerOrnament position="bottom-right" className="opacity-25" />

          {/* Single Row of 6 Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#155a37]/80">
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.id}
                className="relative p-5 sm:p-6 lg:py-7 lg:px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#0a482a] group cursor-pointer"
              >
                {/* Subtle Hover Top Gold Line Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#d49b28] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                {/* Pillar Icon Container */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-[#083e24] border border-[#1d6b43] group-hover:border-[#e5a93c] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(212,155,40,0.35)] transition-all duration-300">
                  {renderPillarIslamicIcon(pillar.id)}
                </div>

                {/* Pillar Title */}
                <h3 className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#e5a93c] leading-snug font-sans transition-colors duration-200 px-1">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};