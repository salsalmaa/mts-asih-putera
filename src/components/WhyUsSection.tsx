import React, { useState } from 'react';
import {
  BookOpen,
  FlaskConical,
  Users2,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { WHY_US_DATA } from '../data/schoolData';
import { WhyUsItem } from '../types';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion,
  MosqueSilhouetteWatermark,
  IslamicOrnamentalDivider
} from './IslamicElements';

interface WhyUsProps {
  onSelectItem?: (item: WhyUsItem) => void;
}

export const WhyUsSection: React.FC<WhyUsProps> = ({ onSelectItem }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-white" strokeWidth={1.8} />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-white" strokeWidth={1.8} />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-white" strokeWidth={1.8} />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-white" strokeWidth={1.8} />;
      default:
        return <BookOpen className="w-6 h-6 text-white" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="profil" className="w-full py-16 sm:py-24 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Subtle Background Texture on Section Canvas */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* 4. Subtle Mosque Dome & Minaret Silhouette */}
      <MosqueSilhouetteWatermark className="opacity-[0.055] lg:opacity-[0.065]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallions & Ornamental Divider */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-2">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#0a4b2f] tracking-tight">
              Mengapa MTs Asih Putera?
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>

          <IslamicOrnamentalDivider className="my-3" color="#0a4b2f" />

          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Membangun generasi muttaqin yang cerdas, berkarakter luhur, dan siap memimpin peradaban masa depan.
          </p>
        </div>

        {/* 2-Column x 2-Row Grid Structure for the 4 Content Blocks with Bright & Luminous Green Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {WHY_US_DATA.map((item) => {
            const isExpanded = activeDetailId === item.id;
            return (
              <div
                key={item.id}
                className="relative bg-[#0f5c38] hover:bg-[#126b42] rounded-2xl shadow-lg shadow-[#0f5c38]/15 hover:shadow-xl hover:shadow-[#0f5c38]/25 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
              >
                {/* Visual Image Header Container (Crisp, High Exposure & Well-Lit) */}
                <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Category Tag Pill floating on top of visual */}
                  {item.tag && (
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0a4b2f]/90 backdrop-blur-md border border-[#e5a93c]/60 text-[#e5a93c] text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase shadow-md z-20">
                      <Sparkles className="w-3 h-3 text-[#e5a93c]" />
                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>

                {/* Content Block Area with Luminous Emerald Green, Geometric Overlay & Gold Accents */}
                <div className="relative p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Gold Indicator Line on Card Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#e5a93c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Dense & Elegant Islamic Geometric Pattern Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.08] group-hover:opacity-[0.14] transition-opacity text-[#e5a93c]"
                    aria-hidden="true"
                  >
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id={`dense-islamic-pattern-${item.id}`}
                          x="0"
                          y="0"
                          width="60"
                          height="60"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                          <circle cx="30" cy="30" r="3" fill="currentColor" />
                          {/* 8-point star lattice */}
                          <path
                            d="M30 6 L36 20 L50 20 L40 28 L45 42 L30 35 L15 42 L20 28 L10 20 L24 20 Z"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                          />
                          <path d="M0 0 L15 15 M60 0 L45 15 M0 60 L15 45 M60 60 L45 45" stroke="currentColor" strokeWidth="0.8" />
                          <circle cx="0" cy="0" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" />
                          <circle cx="60" cy="0" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" />
                          <circle cx="0" cy="60" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" />
                          <circle cx="60" cy="60" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dense-islamic-pattern-${item.id})`} />
                    </svg>
                  </div>

                  {/* Large Decorative Islamic Rosette in Card Corner */}
                  <div 
                    className="absolute -right-8 -bottom-8 w-36 h-36 pointer-events-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity text-[#e5a93c]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-currentColor" strokeWidth="1.5">
                      <polygon points="50,5 63,37 95,50 63,63 50,95 37,63 5,50 37,37" />
                      <polygon points="50,18 60,40 82,50 60,60 50,82 40,60 18,50 40,40" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="16" />
                      <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.4" />
                    </svg>
                  </div>

                  {/* Delicate Tazhib Gold Corner Ornaments */}
                  <TazhibCompactCorner position="top-left" color="#e5a93c" accentColor="#ffffff" />
                  <TazhibCompactCorner position="bottom-right" color="#e5a93c" accentColor="#ffffff" />

                  {/* Upper Content: Icon, Title, Description */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3.5 mb-3.5">
                      {/* Icon Badge with Gold Border & Hover Glow */}
                      <div className="w-12 h-12 rounded-xl bg-[#157147] border border-[#238c59] group-hover:border-[#e5a93c] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(229,169,60,0.35)] transition-all duration-300 shrink-0 text-white">
                        {getIcon(item.iconName)}
                      </div>

                      {/* Title in Crisp White with Gold Hover */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#e5a93c] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description in High-Contrast Off-White/Emerald-100 */}
                    <p className="text-emerald-50/95 group-hover:text-white text-xs sm:text-[13.5px] leading-relaxed mb-4 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Lower Content: Expandable Key Points Button in Gold Accent */}
                  {item.details && (
                    <div className="mt-2 pt-2 border-t border-white/10 relative z-10">
                      <button
                        onClick={() => setActiveDetailId(isExpanded ? null : item.id)}
                        className="text-xs font-semibold text-[#e5a93c] hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors py-1 select-none"
                      >
                        <span>{isExpanded ? 'Tutup Detail' : 'Lihat Fokus Pembelajaran'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#e5a93c] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Expandable List with Gold Checks and Crisp White Text */}
                      {isExpanded && (
                        <ul className="mt-3 space-y-2 pt-3 border-t border-white/10 text-xs text-emerald-50/95 animate-in fade-in duration-200">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a93c] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
