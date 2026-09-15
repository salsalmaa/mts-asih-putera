import React from "react";

import {
  BookOpen,
  FlaskConical,
  Users2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { WHY_US_DATA } from "../data/schoolData";

import { WhyUsItem } from "../types";

import {
  IslamicCanvasWatermark,
  IslamicHeaderMedallion,
  MosqueSilhouetteWatermark,
  TazhibCompactCorner,
} from "./IslamicElements";

interface WhyUsProps {
  onSelectItem?: (item: WhyUsItem) => void;
}

export const WhyUsSection: React.FC<WhyUsProps> = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-white" strokeWidth={1.8} />;

      case "FlaskConical":
        return (
          <FlaskConical className="w-6 h-6 text-white" strokeWidth={1.8} />
        );

      case "Users2":
        return <Users2 className="w-6 h-6 text-white" strokeWidth={1.8} />;

      case "GraduationCap":
        return (
          <GraduationCap className="w-6 h-6 text-white" strokeWidth={1.8} />
        );

      default:
        return <BookOpen className="w-6 h-6 text-white" strokeWidth={1.8} />;
    }
  };

  return (
    <section
      id="profil"
      className="w-full py-10 sm:py-14 bg-[#faf9f5] relative overflow-hidden"
    >
      {/* 1. Subtle Background Texture on Section Canvas */}

      <IslamicCanvasWatermark
        opacityClass="opacity-[0.065]"
        colorClass="text-[#0a4b2f]"
      />

      {/* 4. Subtle Mosque Dome & Minaret Silhouette */}

      <MosqueSilhouetteWatermark className="opacity-[0.055] lg:opacity-[0.065]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallions */}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-2">
            <IslamicHeaderMedallion />

            <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-bold text-[#0a4b2f] tracking-tight">
              Mengapa MTs Asih Putera?
            </h2>

            <IslamicHeaderMedallion isFlipped />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Membangun generasi muttaqin yang cerdas, berkarakter luhur, dan siap
            memimpin peradaban masa depan.
          </p>
        </div>

        {/* 2-Column x 2-Row Grid Structure with Clean Modern Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-7xl mx-auto items-stretch">
          {WHY_US_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className="relative bg-white border border-gray-100 hover:border-[#0a4b2f]/30 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#0a4b2f]/10 transition-all duration-300 flex flex-col group hover:-translate-y-1 h-full"
              >
                {/* Modern Islamic Corner Ornaments di luar card agar nampak jelas */}

                <TazhibCompactCorner className="absolute -top-1.5 -right-1.5 w-7 h-7 text-[#e5a93c]/60 group-hover:text-[#e5a93c] transition-colors duration-300 pointer-events-none z-30" />

                <TazhibCompactCorner className="absolute -bottom-1.5 -left-1.5 w-7 h-7 text-[#e5a93c]/60 group-hover:text-[#e5a93c] transition-colors duration-300 pointer-events-none z-30 rotate-180" />

                {/* Container Gambar dengan overflow-hidden sendiri */}

                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl bg-slate-100 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Category Tag Pill */}

                  {item.tag && (
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0a4b2f]/90 backdrop-blur-md border border-[#e5a93c]/60 text-[#e5a93c] text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase shadow-md z-20">
                      <Sparkles className="w-3 h-3 text-[#e5a93c]" />

                      <span>{item.tag}</span>
                    </div>
                  )}
                </div>

                {/* Content Block Area */}

                <div className="relative p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  {/* Subtle Gold Indicator Line on Card Hover */}

                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#e5a93c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Upper Content: Icon, Title, Description */}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Baris Atas: Ikon dan Judul */}

                      <div className="flex items-start gap-3.5 mb-3.5">
                        {/* Icon Badge */}

                        <div className="w-12 h-12 rounded-xl bg-[#0a4b2f] border border-[#157147] group-hover:border-[#e5a93c] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(229,169,60,0.35)] transition-all duration-300 shrink-0 text-white mt-0.5">
                          {getIcon(item.iconName)}
                        </div>

                        {/* Title dengan min-height untuk menjaga kesejajaran card */}

                        <h3 className="font-serif text-xl sm:text-2xl md:text-[26px] font-bold text-[#0a4b2f] leading-snug group-hover:text-[#126b42] transition-colors flex items-center min-h-[4.8rem] sm:min-h-[5.2rem]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description di bagian bawah */}

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
