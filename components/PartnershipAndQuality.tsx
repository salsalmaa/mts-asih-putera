import React from "react";
import { CheckCircle2, Star, Sparkles } from "lucide-react";
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  TazhibCornerOrnament,
} from "./IslamicElements";
const imgKemitraanOrtu = "/images/mts_kemitraan_ortu_1787397799431.jpg";
const imgSistemMutu = "/images/mts_sistem_mutu_1787397822611.jpg";

export const PartnershipAndQuality: React.FC = () => {
  return (
    <section
      id="prestasi"
      className="w-full py-10 sm:py-14 bg-[#042416] text-[#d1e7dd] border-y border-[#0d3f26] relative overflow-hidden"
    >
      {/* Subtle Islamic Geometric Watermark matching Footer Section */}
      <IslamicCanvasWatermark
        opacityClass="opacity-[0.03]"
        colorClass="text-[#d49b28]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* =========================================================================
              Left Block: Kemitraan dengan Orang Tua (5 cols)
              Rich Intricate Islamic Deep-Green & Gold Card
              ========================================================================= */}
          <div className="relative lg:col-span-5 bg-[#06331e] hover:bg-[#084227] border border-[#16603b] hover:border-[#e5a93c] rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl hover:shadow-[0_16px_36px_rgba(4,36,22,0.4)] transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-5 items-center overflow-hidden group cursor-pointer">
            {/* Top Gold Indicator Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#e5a93c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Rich & Dense Islamic Intricate Arabesque / Girih Star Lattice Background Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.11] group-hover:opacity-[0.18] transition-opacity text-[#e5a93c]"
              aria-hidden="true"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="dense-intricate-islamic-kemitraan"
                    x="0"
                    y="0"
                    width="70"
                    height="70"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* Intricate Interlocking 12-point & 8-point Rosette */}
                    <circle
                      cx="35"
                      cy="35"
                      r="16"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <circle
                      cx="35"
                      cy="35"
                      r="11"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                      fill="none"
                    />
                    <circle cx="35" cy="35" r="4" fill="currentColor" />

                    {/* Multi-pointed Khatim Star petals */}
                    <path
                      d="M35 5 L41 22 L58 22 L45 32 L50 49 L35 40 L20 49 L25 32 L12 22 L29 22 Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M35 65 L41 48 L58 48 L45 38 L50 21 L35 30 L20 21 L25 38 L12 48 L29 48 Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.7"
                      fill="none"
                    />

                    {/* Corner Rosettes */}
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="70"
                      cy="0"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="0"
                      cy="70"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <line
                      x1="0"
                      y1="0"
                      x2="70"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="70"
                      y1="0"
                      x2="0"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#dense-intricate-islamic-kemitraan)"
                />
              </svg>
            </div>

            {/* Corner Tazhib Filigree Flourishes */}
            <TazhibCompactCorner
              position="top-left"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="top-right"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="bottom-left"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="bottom-right"
              color="#e5a93c"
              accentColor="#ffffff"
            />

            {/* Checklist text */}
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#e5a93c] shadow-[0_0_8px_rgba(229,169,60,0.8)]"></span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#e5a93c] transition-colors leading-snug">
                  Kemitraan dengan Orang Tua
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-[13px] text-emerald-100/95 group-hover:text-white transition-colors">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Komunikasi intensif & transparan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Laporan perkembangan belajar
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Mentoring & pembinaan karakter
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Sesi parenting & edukasi rutin
                  </span>
                </li>
              </ul>
            </div>

            {/* Photo with Gold Frame Accent */}
            <div className="w-full sm:w-36 h-36 sm:h-44 rounded-xl overflow-hidden shrink-0 bg-[#042416] border border-[#16603b] group-hover:border-[#e5a93c] shadow-md relative z-10 transition-all duration-300">
              <img
                src={imgKemitraanOrtu}
                alt="Konsultasi Orang Tua dan Guru MTs Asih Putera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#06331e]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* =========================================================================
              Center: AKREDITASI Badge (2 cols) - Preserved completely intact
              ========================================================================= */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-2 relative">
            <div className="text-[11px] font-bold text-[#e5a93c] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
              <span>AKREDITASI</span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
            </div>

            {/* Gold Seal Box with Islamic Khatim Octagram outline */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-linear-to-b from-[#fefbf3] to-[#f9f3e4] border-2 border-[#d49b28] flex flex-col items-center justify-center p-3 shadow-md">
              {/* Subtle background Islamic star */}
              <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <div className="w-16 h-16 border border-[#c89635] rotate-45"></div>
              </div>

              <div className="text-[10px] uppercase font-bold text-[#d49b28] tracking-wider mb-0.5 relative z-10">
                Akreditasi
              </div>
              <div className="font-serif font-extrabold text-3xl sm:text-4xl text-[#0a4b2f] leading-none relative z-10">
                A
              </div>
              <div className="flex items-center gap-0.5 mt-1 text-[#d49b28] relative z-10">
                <Star className="w-3 h-3 fill-[#d49b28]" />
                <Star className="w-3 h-3 fill-[#d49b28]" />
                <Star className="w-3 h-3 fill-[#d49b28]" />
                <Star className="w-3 h-3 fill-[#d49b28]" />
                <Star className="w-3 h-3 fill-[#d49b28]" />
              </div>
            </div>
          </div>

          {/* =========================================================================
              Right Block: Sistem Mutu Pendidikan (5 cols)
              Rich Intricate Islamic Deep-Green & Gold Card
              ========================================================================= */}
          <div className="relative lg:col-span-5 bg-[#06331e] hover:bg-[#084227] border border-[#16603b] hover:border-[#e5a93c] rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl hover:shadow-[0_16px_36px_rgba(4,36,22,0.4)] transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-5 items-center overflow-hidden group cursor-pointer">
            {/* Top Gold Indicator Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#e5a93c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />

            {/* Rich & Dense Islamic Intricate Girih Arabesque Lattice Background Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.11] group-hover:opacity-[0.18] transition-opacity text-[#e5a93c]"
              aria-hidden="true"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="dense-intricate-islamic-sistem-mutu"
                    x="0"
                    y="0"
                    width="70"
                    height="70"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* Intricate Multi-pointed Girih Arabesque Medallion */}
                    <circle
                      cx="35"
                      cy="35"
                      r="16"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <circle
                      cx="35"
                      cy="35"
                      r="11"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                      fill="none"
                    />
                    <circle cx="35" cy="35" r="4" fill="currentColor" />

                    {/* Interlocking 8-point Khatim Star Ribbons */}
                    <path
                      d="M35 5 L41 22 L58 22 L45 32 L50 49 L35 40 L20 49 L25 32 L12 22 L29 22 Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M35 65 L41 48 L58 48 L45 38 L50 21 L35 30 L20 21 L25 38 L12 48 L29 48 Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.7"
                      fill="none"
                    />

                    {/* Interlocking Diamond Connectors */}
                    <polygon
                      points="35,16 45,35 35,54 25,35"
                      stroke="currentColor"
                      strokeWidth="0.9"
                      fill="none"
                    />

                    {/* Corner Medallions */}
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="70"
                      cy="0"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="0"
                      cy="70"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                    <line
                      x1="0"
                      y1="0"
                      x2="70"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <line
                      x1="70"
                      y1="0"
                      x2="0"
                      y2="70"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#dense-intricate-islamic-sistem-mutu)"
                />
              </svg>
            </div>

            {/* Corner Tazhib Filigree Flourishes */}
            <TazhibCompactCorner
              position="top-left"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="top-right"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="bottom-left"
              color="#e5a93c"
              accentColor="#ffffff"
            />
            <TazhibCompactCorner
              position="bottom-right"
              color="#e5a93c"
              accentColor="#ffffff"
            />

            {/* Checklist text */}
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#e5a93c] shadow-[0_0_8px_rgba(229,169,60,0.8)]"></span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#e5a93c] transition-colors leading-snug">
                  Sistem Mutu Pendidikan
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-[13px] text-emerald-100/95 group-hover:text-white transition-colors">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Perencanaan pembelajaran terukur
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Observasi & supervisi berkelanjutan
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Penilaian autentik & komprehensif
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Monitoring & pengembangan berkelanjutan
                  </span>
                </li>
              </ul>
            </div>

            {/* Photo with Gold Frame Accent */}
            <div className="w-full sm:w-36 h-36 sm:h-44 rounded-xl overflow-hidden shrink-0 bg-[#042416] border border-[#16603b] group-hover:border-[#e5a93c] shadow-md relative z-10 transition-all duration-300">
              <img
                src={imgSistemMutu}
                alt="Sistem Mutu Pendidikan Terukur dan Teruji"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#06331e]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
