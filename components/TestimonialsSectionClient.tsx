"use client";

import React from "react";
import { TestimonialItem } from "../types";
import { TazhibCompactCorner, TazhibCornerOrnament } from "./IslamicElements";

interface TestimonialsSectionClientProps {
  testimonialsList: TestimonialItem[];
  loading: boolean;
  error: string | null;
}

export function TestimonialsSectionClient({
  testimonialsList,
  loading,
  error,
}: TestimonialsSectionClientProps) {
  return (
    <section className="w-full py-10 sm:py-14 bg-[#073922] relative overflow-hidden border-y border-[#0d5333]/50 shadow-inner">
      {/* Islamic Tazhib Gold Corner Ornaments matching 'Prestasi & Karya Nyata' */}
      <TazhibCornerOrnament
        position="top-left"
        className="opacity-70 sm:w-24 sm:h-24"
      />
      <TazhibCornerOrnament
        position="top-right"
        className="opacity-70 sm:w-24 sm:h-24"
      />
      <TazhibCornerOrnament
        position="bottom-left"
        className="opacity-70 sm:w-24 sm:h-24"
      />
      <TazhibCornerOrnament
        position="bottom-right"
        className="opacity-70 sm:w-24 sm:h-24"
      />

      {/* Subtle background watermarked circular accents */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-3">
            {/* Left Gold Rosette Medallion */}
            <div
              className="inline-flex items-center gap-1.5 text-[#d49b28]"
              aria-hidden="true"
            >
              <svg
                className="w-8 sm:w-14 h-2 text-[#d49b28]/60"
                viewBox="0 0 60 8"
                fill="none"
              >
                <path
                  d="M60 4 H10 M10 4 C5 2 2 4 0 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="4" r="1.5" fill="#ffd166" />
              </svg>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="#073922"
                />
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(45 12 12)"
                  stroke="#ffd166"
                  strokeWidth="1.1"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  fill="#d49b28"
                  fillOpacity="0.4"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="12" cy="12" r="1.2" fill="#ffd166" />
              </svg>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
              Apa Kata Orang Tua & Siswa?
            </h2>

            {/* Right Gold Rosette Medallion */}
            <div
              className="inline-flex items-center gap-1.5 text-[#d49b28] flex-row-reverse"
              aria-hidden="true"
            >
              <svg
                className="w-8 sm:w-14 h-2 text-[#d49b28]/60"
                viewBox="0 0 60 8"
                fill="none"
              >
                <path
                  d="M0 4 H50 M50 4 C55 2 58 4 60 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="52" cy="4" r="1.5" fill="#ffd166" />
              </svg>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  fill="#073922"
                />
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="1"
                  transform="rotate(45 12 12)"
                  stroke="#ffd166"
                  strokeWidth="1.1"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  fill="#d49b28"
                  fillOpacity="0.4"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="12" cy="12" r="1.2" fill="#ffd166" />
              </svg>
            </div>
          </div>

          <p className="text-[#e2dac6] text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed font-medium drop-shadow-xs">
            Pengalaman nyata dan keteladanan dari keluarga besar MTs Asih Putera
          </p>
        </div>

        {/* Loading / Error / Content States */}
        {loading ? (
          <div className="text-center py-12 text-[#e2dac6] text-sm">
            Memuat testimoni...
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-300 text-sm">{error}</div>
        ) : testimonialsList.length === 0 ? (
          <div className="text-center py-12 text-[#e2dac6] text-sm">
            Belum ada testimoni tersedia.
          </div>
        ) : (
          /* Testimonials Grid with Clean White Content Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="relative bg-white border-2 border-[#d49b28]/30 hover:border-[#d49b28] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition-all duration-300 group pt-10"
              >
                {/* Tazhib Corner Flourishes */}
                <TazhibCompactCorner
                  position="top-left"
                  color="#0a4b2f"
                  accentColor="#d49b28"
                />
                <TazhibCompactCorner
                  position="top-right"
                  color="#0a4b2f"
                  accentColor="#d49b28"
                />
                <TazhibCompactCorner
                  position="bottom-left"
                  color="#0a4b2f"
                  accentColor="#d49b28"
                />
                <TazhibCompactCorner
                  position="bottom-right"
                  color="#0a4b2f"
                  accentColor="#d49b28"
                />

                {/* Golden quote circle badge on top center */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#d49b28] group-hover:bg-[#0a4b2f] text-white flex items-center justify-center font-serif font-black text-2xl shadow-lg border-2 border-white group-hover:border-[#d49b28] transition-all z-20">
                  ”
                </div>

                {/* Avatar picture */}
                <div className="flex justify-center mb-5 relative z-10">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#d49b28] group-hover:border-[#0a4b2f] shadow-md transition-colors">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-xs sm:text-[13.5px] leading-relaxed text-center italic mb-6 relative z-10">
                  "{item.quote}"
                </p>

                {/* Author and Role */}
                <div className="text-center pt-4 border-t border-gray-100 relative z-10">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0a4b2f] group-hover:text-[#06331e] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[10.5px] font-bold text-[#d49b28] uppercase tracking-wider mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}