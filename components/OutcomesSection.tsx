import React from 'react';
import { OUTCOMES_DATA } from '../data/schoolData';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion
} from './IslamicElements';

export const OutcomesSection: React.FC = () => {
  // Enhanced Islamic Icons with gold and crisp white accents tailored for deep-green cards
  const renderEnhancedIcon = (id: string) => {
    switch (id) {
      case 'iman-akhlak':
      case 'out-1':
        // Iman, Tauhid, dan Adab yang Mengakar: Book + Arched Mihrab & 8-pointed Noor Star
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
              {/* Arched Mihrab silhouette behind */}
              <path
                d="M8 30 V16 C8 10 18 4 18 4 C18 4 28 10 28 16 V30"
                stroke="#e5a93c"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2 2"
                className="opacity-70"
              />
              {/* Open Quran / Book */}
              <path
                d="M6 24 C12 21 17 22 18 25 C19 22 24 21 30 24 V13 C24 10 19 11 18 14 C17 11 12 10 6 13 Z"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinejoin="round"
                fill="#0d5934"
                fillOpacity="0.9"
              />
              <path d="M18 14 V25" stroke="#e5a93c" strokeWidth="1.5" />
              {/* Top 8-pointed Star / Noor */}
              <circle cx="18" cy="8" r="2" fill="#e5a93c" />
              <path d="M18 4 V7 M18 9 V12 M15 8 H17 M19 8 H21" stroke="#e5a93c" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        );
      case 'nalar-prestasi':
      case 'out-2':
        // Nalar Kritis dan Prestasi Akademik: Trophy with 8-pointed Islamic Star emblem
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
              {/* Halo glow */}
              <circle cx="18" cy="14" r="11" stroke="#e5a93c" strokeWidth="0.9" strokeDasharray="1.5 2" className="opacity-80" />
              {/* Trophy Cup */}
              <path
                d="M10 8 H26 V17 C26 21.4 22.4 25 18 25 C13.6 25 10 21.4 10 17 V8 Z"
                stroke="#ffffff"
                strokeWidth="1.6"
                fill="#0d5934"
                fillOpacity="0.9"
              />
              <path d="M10 11 H6 C4.9 11 4 11.9 4 13 V15 C4 17.2 5.8 19 8 19 H10" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M26 11 H30 C31.1 11 32 11.9 32 13 V15 C32 17.2 30.2 19 28 19 H26" stroke="#e5a93c" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M18 25 V29 M12 29 H24" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
              {/* Khatim 8-pointed star in trophy center */}
              <rect x="15" y="13" width="6" height="6" stroke="#e5a93c" strokeWidth="1.2" fill="#0d5934" />
              <rect x="15" y="13" width="6" height="6" transform="rotate(45 18 16)" stroke="#e5a93c" strokeWidth="1.2" fill="#0d5934" />
            </svg>
          </div>
        );
      case 'kepemimpinan-kemandirian':
      case 'out-3':
        // Kemandirian, Resiliensi, dan Karakter Pemimpin: Compass with Islamic Rub el Hizb pointer & Crescent
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
              {/* Outer compass ring */}
              <circle cx="18" cy="18" r="13" stroke="#ffffff" strokeWidth="1.4" fill="#0d5934" fillOpacity="0.9" />
              <circle cx="18" cy="18" r="10.5" stroke="#e5a93c" strokeWidth="0.9" strokeDasharray="2 2" className="opacity-90" />
              {/* Crescent Moon accent */}
              <path
                d="M18 7 C14 7 11 10 11 14 C11 17 13 19 16 20 C13.5 19 12.5 16 13.5 13.5 C14.5 11 17 9.5 18 7 Z"
                fill="#e5a93c"
              />
              {/* Compass Needle (Qibla / Direction Arrow) */}
              <polygon points="18,8 21.5,18 18,16 14.5,18" fill="#ffffff" />
              <polygon points="18,28 21.5,18 18,20 14.5,18" fill="#e5a93c" />
              <circle cx="18" cy="18" r="1.8" fill="#e5a93c" stroke="#ffffff" strokeWidth="1" />
            </svg>
          </div>
        );
      case 'karya-kebermanfaatan':
      case 'out-4':
        // Kepedulian Sosial dan Kemanfaatan Nyata: Sprout of Barakah nestled in Crescent Moon
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
              {/* Gentle Crescent Moon Cradle */}
              <path
                d="M26 8 C20 6 12 10 10 17 C8 24 13 30 20 31 C24 31.5 28 29.5 30 26.5 C24 28 17 24 16 18 C15 12 20 8.5 26 8 Z"
                fill="#e5a93c"
                fillOpacity="0.3"
                stroke="#e5a93c"
                strokeWidth="1.2"
              />
              {/* Twin Leaves (Kemanfaatan / Alam) */}
              <path
                d="M18 28 C18 20 25 15 25 15 C25 15 25 22 18 28 Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="#0d5934"
                fillOpacity="0.9"
              />
              <path
                d="M18 24 C18 17 12 13 12 13 C12 13 12 19 18 24 Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="#0d5934"
                fillOpacity="0.9"
              />
              <path d="M18 28 V19" stroke="#e5a93c" strokeWidth="1.5" strokeLinecap="round" />
              {/* Star of Blessing */}
              <circle cx="27" cy="11" r="1.8" fill="#e5a93c" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#fdfcf9] border-t border-[#ece7d8] overflow-hidden">
      {/* 1. Subtle Canvas Islamic Geometric Watermark Pattern on light background */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title Header - Center diamond ornament removed */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-[12px] sm:text-xs font-semibold tracking-widest uppercase text-[#9c7428] mb-1 font-sans">
            Output & Keberhasilan Belajar
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0a4b2f] tracking-tight">
              4 Hasil Utama Pendidikan MTs Asih Putera
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Profil lulusan yang kokoh dalam akidah, unggul dalam nalar intelektual, matang dalam kepribadian, serta berdaya guna bagi kemaslahatan umat.
          </p>
        </div>

        {/* 4 Cards Grid - Styled with a brighter, more vibrant Green Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OUTCOMES_DATA.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden bg-[#0f6b3e] hover:bg-[#137b48] rounded-2xl p-6 sm:p-7 border border-[#1b854e] hover:border-[#e5a93c]/80 shadow-md hover:shadow-2xl hover:shadow-[0_12px_32px_rgba(15,107,62,0.25)] transition-all duration-300 hover:-translate-y-1 flex flex-col group text-center sm:text-left cursor-pointer"
            >
              {/* Subtle Gold Indicator Line at Top on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#e5a93c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

              {/* Tazhib Gold Corner Flourishes */}
              <TazhibCompactCorner position="top-left" color="#e5a93c" accentColor="#ffffff" />
              <TazhibCompactCorner position="top-right" color="#e5a93c" accentColor="#ffffff" />
              <TazhibCompactCorner position="bottom-left" color="#e5a93c" accentColor="#ffffff" />
              <TazhibCompactCorner position="bottom-right" color="#e5a93c" accentColor="#ffffff" />

              {/* Subtle background Islamic geometric/floral pattern inside each card */}
              <div 
                className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none opacity-[0.08] group-hover:opacity-[0.18] transition-opacity text-[#e5a93c]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-currentColor" strokeWidth="2">
                  <polygon points="50,5 63,37 95,50 63,63 50,95 37,63 5,50 37,37" />
                  <polygon points="50,18 60,40 82,50 60,60 50,82 40,60 18,50 40,40" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="14" />
                  <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>

              {/* Enhanced Islamic Icon Container with Gold Accents */}
              <div className="w-14 h-14 rounded-2xl bg-[#0d5934] border border-[#20965c] group-hover:border-[#e5a93c] flex items-center justify-center mb-5 mx-auto sm:mx-0 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(229,169,60,0.35)] transition-all duration-300 relative z-10">
                {renderEnhancedIcon(item.id)}
              </div>

              {/* Title with Clean White Typography & Gold Hover */}
              <h3 className="font-serif text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-[#e5a93c] transition-colors relative z-10">
                {item.title}
              </h3>

              {/* Description in High-Contrast Crisp Off-White/Emerald-100 */}
              <p className="text-emerald-50/95 group-hover:text-white text-xs sm:text-[13px] leading-relaxed relative z-10 transition-colors">
                {item.description}
              </p>

              {/* Bottom Subtle Gold Accent Bar */}
              <div className="mt-auto pt-4 border-t border-[#1b854e] flex items-center justify-between opacity-85 group-hover:opacity-100 transition-opacity text-[11px] font-semibold text-[#e5a93c] relative z-10">
                <span>Asih Putera Standard</span>
                <span className="text-white group-hover:text-[#e5a93c] transition-colors">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};