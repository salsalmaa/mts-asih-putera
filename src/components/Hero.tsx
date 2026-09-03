import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Users,
  HeartHandshake,
  Heart,
  Sparkles
} from 'lucide-react';
import heroBgImage from '../assets/images/hero_new_bg.jpg';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  ArchSilhouetteWatermark
} from './IslamicElements';

interface HeroProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPpdb, onOpenVisit }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a4b2f]">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Siswa-siswi MTs Asih Putera berdiskusi dan belajar aktif di kelas madrasah"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Soft gradient from left and bottom to ensure pristine contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-[#072c1c]/95 via-[#0a4b2f]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#062417] via-transparent to-black/20"></div>
      </div>

      {/* Islamic Background Texture Overlay */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.045]" colorClass="text-[#e5a93c]" />

      {/* Subtle Arch Silhouette on Right */}
      <ArchSilhouetteWatermark position="right" className="opacity-[0.05] text-white" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-20 md:pb-28">
        <div className="max-w-2xl text-white">
          {/* Top small title with Islamic Rosette */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rotate-45 bg-[#d49b28]"></span>
            <span className="font-serif font-bold text-lg sm:text-2xl text-[#d49b28] tracking-wide drop-shadow-xs">
              MTs Asih Putera
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#d49b28]"></span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] font-bold text-white mb-5 tracking-tight drop-shadow-sm">
            Menumbuhkan Iman, Nalar, dan Kepemimpinan Remaja
          </h1>

          {/* Subheading description */}
          <p className="text-gray-200 text-sm sm:text-base md:text-[16.5px] leading-relaxed mb-8 font-normal max-w-xl drop-shadow-xs">
            Madrasah Tsanawiyah yang memadukan tauhid, adab, akademik, pembelajaran aktif, dan pengalaman hidup untuk membentuk remaja yang berkarakter, cerdas, tangguh, dan bermanfaat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-12">
            <button
              id="hero-ppdb-cta"
              onClick={onOpenPpdb}
              className="bg-[#0b5433] hover:bg-[#073c24] border border-[#197548] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Informasi PPDB</span>
              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-visit-cta"
              onClick={onOpenVisit}
              className="bg-black/25 hover:bg-black/40 backdrop-blur-xs border border-[#d49b28]/80 text-[#f6d899] hover:text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-md transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Jadwalkan Kunjungan</span>
              <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Feature highlight pills horizontal bar with Tazhib touches */}
        <div className="relative mt-3 max-w-2xl bg-white/95 backdrop-blur-md rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 shadow-xl border border-white/80 overflow-hidden">
          <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" className="opacity-75" />
          <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" className="opacity-75" />
          <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" className="opacity-75" />
          <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" className="opacity-75" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200/90 relative z-10">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center py-1 px-1 sm:px-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1.5 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <ShieldCheck className="w-6 h-6 sm:w-6.5 sm:h-6.5" strokeWidth={2} />
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                TAUHID & AKHLAK
              </span>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center py-1 px-1 sm:px-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1.5 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <BookOpen className="w-6 h-6 sm:w-6.5 sm:h-6.5" strokeWidth={2} />
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                ACADEMIC EXCELLENCE
              </span>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center py-1 px-1 sm:px-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1.5 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <Users className="w-6 h-6 sm:w-6.5 sm:h-6.5" strokeWidth={2} />
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                LEADERSHIP & LIFE SKILLS
              </span>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center justify-center py-1 px-1 sm:px-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e6c98f] shadow-sm flex items-center justify-center text-[#c28418] mb-1.5 transition-transform duration-200 hover:scale-105 hover:border-[#0a4b2f]">
                <HeartHandshake className="w-6 h-6 sm:w-6.5 sm:h-6.5" strokeWidth={2} />
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 tracking-wider leading-tight">
                KOLABORASI ORANG TUA
              </span>
            </div>
          </div>
        </div>

        {/* Floating badge bottom-right with Tazhib corner flourish */}
        <div className="relative mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8 inline-flex items-center gap-3 bg-[#073822]/95 backdrop-blur-md border border-[#16653e] text-white px-5 py-3 rounded-xl shadow-xl overflow-hidden">
          <TazhibCompactCorner position="top-right" color="#e5a93c" accentColor="#16653e" />
          <TazhibCompactCorner position="bottom-left" color="#e5a93c" accentColor="#16653e" />

          <div className="w-9 h-9 rounded-full bg-[#0e5032] flex items-center justify-center text-[#e5a93c] relative z-10">
            <Heart className="w-4 h-4 fill-[#e5a93c]" />
          </div>
          <div className="text-left relative z-10">
            <p className="text-xs font-semibold text-white leading-tight">Belajar dengan Hati,</p>
            <p className="text-[11px] text-gray-300">Bertumbuh dengan Makna</p>
          </div>
        </div>
      </div>
    </section>
  );
};

