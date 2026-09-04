import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { JOURNEY_STAGES } from '../data/schoolData';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion,
  ArchSilhouetteWatermark
} from './IslamicElements';

export const LearningJourney: React.FC = () => {
  return (
    <section id="kesiswaan" className="w-full py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Islamic Watermark Texture */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* Subtle Arch Silhouette on left margin */}
      <ArchSilhouetteWatermark position="left" className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Header Medallions */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
              Perjalanan Belajar Siswa MTs
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>
          
        </div>

        {/* 3 Steps with Connectors & Tazhib Corner Flourishes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch">
          {JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.grade}
              className="relative bg-[#faf9f5] border border-gray-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#0a4b2f]/40 transition-all flex flex-col group"
            >
              {/* Tazhib Corner Flourishes */}
              <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
              <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />
              <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" />
              <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

              {/* Photo Header */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                <img
                  src={stage.image}
                  alt={`${stage.title} - ${stage.subtitle}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0a4b2f] text-[#e5a93c] font-bold text-xs px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5 z-10">
                  <span className="w-4 h-4 rounded-full bg-[#d49b28] text-white flex items-center justify-center text-[10px]">
                    {stage.grade}
                  </span>
                  <span>{stage.title}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col relative z-10 bg-[#faf9f5]">
                <div className="mb-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0a4b2f]">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base font-extrabold text-[#d49b28] uppercase tracking-wider mt-1">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-700 mt-auto">
                  {stage.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a4b2f] mt-1.5 shrink-0"></span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};