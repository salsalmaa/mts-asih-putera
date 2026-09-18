"use client";

import React from "react";
import { Trophy, Medal, Lightbulb } from "lucide-react";
import { ProgramItem } from "../types";
import { IslamicCanvasWatermark } from "./IslamicElements";

interface FeaturedProgramsClientProps {
  programsList: ProgramItem[];
  error: string | null;
  onSelectProgram: (program: ProgramItem) => void;
}

export const FeaturedProgramsClient: React.FC<FeaturedProgramsClientProps> = ({
  programsList,
  error,
  onSelectProgram,
}) => {
  return (
    <section
      id="program"
      className="w-full py-6 sm:py-10 bg-[#faf9f5] relative overflow-hidden"
    >
      {/* 1. Background Texture: Islamic geometric pattern as background watermark (Subtle Opacity) */}
      <IslamicCanvasWatermark
        opacityClass="opacity-[0.04]"
        colorClass="text-[#0a4b2f]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Value Connector & Balanced Accents */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#c89635] mb-2 px-3 py-1 bg-[#c89635]/10 rounded-full">
            Program & Pengalaman Siswa
          </div>

          {/* Heading with tight inline ornamentation */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 text-[#c89635]">
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-5 sm:w-6 h-[1px] bg-[#c89635]/50"></div>
                <span className="text-sm">✦</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight text-center">
                Program Unggulan yang Menghidupkan Nilai
              </h2>

              <div className="hidden sm:flex items-center gap-1.5">
                <span className="text-sm">✦</span>
                <div className="w-5 sm:w-6 h-[1px] bg-[#c89635]/50"></div>
              </div>
            </div>
          </div>

          {/* Value Connector Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 font-normal leading-relaxed max-w-xl mx-auto">
            Pengalaman belajar yang dirancang untuk membentuk karakter kuat,
            kompetensi unggul, dan kemandirian siswa.
          </p>
        </div>

        {/* Layout: Left Highlights Card + Right Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-2">
          {/* Left Dark Green Highlights Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#073922] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-[#0d5333]/50 h-full">
            {/* Background watermarked pattern - subtle */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                  Prestasi & Karya Nyata
                </h3>

                {/* Centered content area */}
                <div className="flex flex-col space-y-5">
                  {/* 1 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                      <Trophy className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-xl sm:text-2xl text-[#e5a93c] leading-tight">
                        100+
                      </div>
                      <div className="text-xs text-gray-100 mt-0.5 leading-snug">
                        Prestasi Akademik & Non Akademik
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                      <Medal className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-xl sm:text-2xl text-[#e5a93c] leading-tight">
                        Juara
                      </div>
                      <div className="text-xs text-gray-100 mt-0.5 leading-snug">
                        Lomba tingkat kota & provinsi
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                      <Lightbulb className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-xl sm:text-2xl text-[#e5a93c] leading-tight">
                        Karya
                      </div>
                      <div className="text-xs text-gray-100 mt-0.5 leading-snug">
                        Proyek & kontribusi sosial siswa
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Quote */}
              <div className="mt-8 pt-4 relative z-10 border-t border-[#0d5333]">
                <p className="text-[11px] text-gray-300 italic leading-relaxed font-light">
                  "Mendidik setiap potensi anak dengan keteladanan, pembiasaan
                  baik, dan kemandirian."
                </p>
              </div>
            </div>
          </div>

          {/* Right Program Cards Grid (8 cols) */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {error ? (
              <div className="flex items-center justify-center h-full min-h-[220px] text-red-500 text-sm font-medium">
                {error}
              </div>
            ) : programsList.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[220px] text-gray-500 text-sm font-medium">
                Belum ada program unggulan tersedia.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-rows-2 h-full">
                {programsList.slice(0, 6).map((program) => (
                  <div
                    key={program.id}
                    onClick={() => onSelectProgram(program)}
                    style={{
                      boxShadow: "0 8px 24px rgba(10, 75, 47, 0.06)",
                    }}
                    className="relative bg-white rounded-2xl overflow-hidden border border-[#0a4b2f]/10 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0a4b2f]/30 transition-all duration-300 flex flex-col cursor-pointer group h-full"
                  >
                    {/* Photo - Porsi ruang gambar diperbesar menjadi h-[74%], object-cover agar gambar proporsional */}
                    <div className="h-[74%] relative overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={program.image}
                        alt={program.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute inset-0 border-b border-[#0a4b2f]/15 pointer-events-none"></div>
                    </div>

                    {/* Content - Ruang putih/teks disesuaikan menjadi lebih ringkas */}
                    <div className="h-[26%] px-3 py-2 flex items-center justify-center relative z-10 bg-white">
                      <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#0a4b2f] leading-tight group-hover:text-[#d49b28] transition-colors text-center line-clamp-2">
                        {program.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
