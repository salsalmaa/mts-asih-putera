import React from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { FACILITIES_DATA } from '../data/schoolData';
import { FacilityItem } from '../types';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion,
  MosqueSilhouetteWatermark
} from './IslamicElements';

interface FacilitiesSectionProps {
  onSelectFacility: (facility: FacilityItem) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onSelectFacility }) => {
  return (
    <section id="galeri" className="w-full py-16 sm:py-24 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Background Islamic Geometric Watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* Subtle Mosque Silhouette Watermark */}
      <MosqueSilhouetteWatermark className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallions */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
              Fasilitas & Kehidupan Siswa
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>
          {/* Subtle gold ornamental accent */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-[#d49b28]/60"></span>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></div>
            <span className="h-0.5 w-10 bg-[#d49b28]/60"></span>
          </div>
        </div>

        {/* 6 Facilities Grid with Emerald & Warm Gold Themed Luminescence */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {FACILITIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectFacility(item)}
              className="relative group cursor-pointer"
            >
              {/* 1. Ambient Emerald & Antique Gold Themed Backlight Halo */}
              <div 
                className="absolute -inset-0.5 rounded-2xl bg-linear-to-b from-[#0a4b2f]/25 via-[#15795c]/20 to-[#d49b28]/30 blur-xs opacity-75 group-hover:opacity-100 group-hover:blur-sm group-hover:from-[#0a4b2f]/50 group-hover:via-[#15795c]/40 group-hover:to-[#d49b28]/45 transition-all duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* 2. Main Card Container with Subtle Emerald-Green Luminescence & Elevation */}
              <div className="relative bg-white rounded-xl overflow-hidden border border-[#0a4b2f]/25 group-hover:border-[#0a4b2f] shadow-[0_4px_18px_rgba(10,75,47,0.08),0_0_14px_rgba(10,75,47,0.12)] group-hover:shadow-[0_12px_30px_rgba(10,75,47,0.22),0_0_22px_rgba(21,121,92,0.32)] transition-all duration-300 flex flex-col group-hover:-translate-y-1.5 z-10">
                
                {/* 3. Top Rim-Light Shimmer Highlight in Refined Warm Gold & Emerald */}
                <div 
                  className="absolute top-0 inset-x-0 h-[1.5px] bg-linear-to-r from-transparent via-[#d49b28] to-transparent opacity-80 group-hover:opacity-100 group-hover:h-[2px] transition-all z-30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Tazhib Corner Flourishes */}
                <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

                {/* Photo Container with Forest Green & Warm Accent Lighting Overlay */}
                <div className="h-32 sm:h-36 relative overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle ambient forest-green light gradient on top of photo */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#042416]/50 via-transparent to-[#0a4b2f]/15 pointer-events-none" />

                  {/* Hover Quick-Inspect overlay with emerald glow badge */}
                  <div className="absolute inset-0 bg-[#0a4b2f]/35 group-hover:bg-[#0a4b2f]/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="w-9 h-9 rounded-full bg-white/95 text-[#0a4b2f] group-hover:text-[#d49b28] flex items-center justify-center shadow-[0_0_14px_rgba(10,75,47,0.45)] transform scale-90 group-hover:scale-100 transition-all">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Title Container */}
                <div className="p-3 text-center flex items-center justify-center min-h-[48px] relative z-10 bg-white border-t border-gray-100 group-hover:border-[#0a4b2f]/20 transition-colors">
                  <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#0a4b2f] leading-snug group-hover:text-[#d49b28] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
