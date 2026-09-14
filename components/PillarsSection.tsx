import React from 'react';
import { PILLARS_DATA } from '../data/schoolData';
import {
  IslamicCanvasWatermark,
  TazhibCornerOrnament,
} from './IslamicElements';

export const PillarsSection: React.FC = () => {
  // Enhanced detailed Islamic vector icons tailored with a more prominent scale
  const renderPillarIslamicIcon = (id: string) => {
    switch (id) {
      case 'tauhid-akhlak':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 3 C21 3 25 5 27 7 C27 15 25 23 16 29 C7 23 5 15 5 7 C7 5 11 3 16 3 Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M11 15.5 L14.5 19 L21 11.5"
              stroke="#e5a93c"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'pendidikan-hati':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 27 L22 17 M22 27 L10 17" stroke="#e5a93c" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M16 11 C14.5 7.5 8 7.5 6 12 C5 14.5 6.5 19 16 23 C25.5 19 27 14.5 26 12 C24 7.5 17.5 7.5 16 11 Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.15"
            />
            <path d="M16 11 V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M16 14 C15.2 12.5 13 12.5 12.2 13.8 C11.8 14.8 12.6 16.5 16 18.5 C19.4 16.5 20.2 14.8 19.8 13.8 C19 12.5 16.8 12.5 16 14 Z"
              fill="#e5a93c"
            />
          </svg>
        );

      case 'sunda-islami':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 5 C15 6.5 18 10 17 14 C16 17 18 19 20 20 C18 21.5 15 21 14 18 C13.5 16.5 11 15 11 11 C11 7.5 13 5 13 5 Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity="0.15"
            />
            <path d="M14 20 L13 27 C13 27 11 26 10 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="15" cy="11" r="1" fill="#e5a93c" />
            <circle cx="15.5" cy="14" r="1" fill="#e5a93c" />
            <circle cx="16" cy="17" r="1" fill="#e5a93c" />
            <g transform="translate(20, 8) scale(0.35)">
              <rect x="0" y="0" width="16" height="16" stroke="#e5a93c" strokeWidth="2" fill="none" />
              <rect x="0" y="0" width="16" height="16" transform="rotate(45 8 8)" stroke="#e5a93c" strokeWidth="2" fill="none" />
              <circle cx="8" cy="8" r="3" fill="#e5a93c" />
            </g>
          </svg>
        );

      case 'kolaborasi-ortu':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 21 C6 17 8 14.5 11 14.5 C12.8 14.5 14 15.5 14.8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="21" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M26 21 C26 17 24 14.5 21 14.5 C19.2 14.5 18 15.5 17.2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="14" r="1.8" stroke="#e5a93c" strokeWidth="1.5" fill="#e5a93c" />
            <path d="M13 23 C13 20 14.3 18.5 16 18.5 C17.7 18.5 19 20 19 23" stroke="#e5a93c" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M5 24 C8 26.5 12 27.5 16 27.5 C20 27.5 24 26.5 27 24"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path d="M11 5 C13.5 3.5 18.5 3.5 21 5" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 2" />
          </svg>
        );

      case 'future-ready':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="7" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />
            <path d="M12 22 L10 26 H22 L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path
              d="M9 18 L14 13 L17 15 L22 10"
              stroke="#e5a93c"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M18 10 H22 V14" stroke="#e5a93c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M23 9.5 C22 9.5 21.2 10.2 21.2 11.2 C21.2 12.2 22 12.9 23 12.9 C21.8 12.9 20.8 12 20.8 11.2 C20.8 10.4 21.8 9.5 23 9.5 Z"
              fill="#e5a93c"
            />
            <circle cx="24" cy="10" r="0.8" fill="#e5a93c" />
          </svg>
        );

      case 'sistem-mutu':
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20 L10 27 L16 24 L22 27 L20 20" stroke="#e5a93c" strokeWidth="1.4" fill="#e5a93c" fillOpacity="0.25" strokeLinejoin="round" />
            <rect x="7" y="5" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="#042416" />
            <rect x="7" y="5" width="18" height="18" rx="1.5" transform="rotate(45 16 14)" stroke="#e5a93c" strokeWidth="1.4" fill="#042416" />
            <circle cx="16" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            <path
              d="M13 14 L15.2 16.2 L19.2 11.8"
              stroke="#e5a93c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 32 32" className="w-16 h-16 sm:w-20 sm:h-20" fill="none">
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        );
    }
  };

  return (
    <section id="kurikulum" className="relative w-full py-12 sm:py-16 bg-[#042416] text-white border-y border-[#0d3f26] overflow-hidden">
      {/* Full Canvas Islamic Geometric Watermark Pattern */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.04]" colorClass="text-[#d49b28]" />

      {/* Decorative ambient lighting glows */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#0f5735]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-[#d49b28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#e5a93c] mb-2 font-sans">
            FONDASI NILAI & KARAKTER
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            6 Pilar Pendidikan Asih Putera
          </h2>
        </div>

        {/* Cohesive Container with Enhanced Spacing */}
        <div className="bg-[#06331e]/95 border border-[#16603b] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xs relative group/container">
          {/* Tazhib filigree corner flourishes */}
          <TazhibCornerOrnament position="top-left" className="opacity-30" />
          <TazhibCornerOrnament position="bottom-right" className="opacity-30" />

          {/* Grid Layout: 2 Kolom di HP, 3 Kolom di Tablet/Desktop (3x2 Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.id}
                className="relative bg-[#083a22]/80 hover:bg-[#0a482a] border border-[#175c3a] hover:border-[#e5a93c]/60 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-[0_10px_25px_rgba(212,155,40,0.25)] group cursor-pointer"
              >
                {/* Top Gold Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-[#d49b28] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                {/* Prominent Large Pillar Icon Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-[#0e5030] to-[#073820] border-2 border-[#1e6f46] group-hover:border-[#e5a93c] text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-all duration-300">
                  {renderPillarIslamicIcon(pillar.id)}
                </div>

                {/* Pillar Title */}
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e5a93c] leading-snug font-sans transition-colors duration-200">
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