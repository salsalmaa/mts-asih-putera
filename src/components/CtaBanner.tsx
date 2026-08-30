import React from 'react';
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import {
  IslamicCanvasWatermark,
  TazhibCornerOrnament,
} from './IslamicElements';
import { OfficialLogo } from './OfficialLogo';
import imgBuildingBanner from '../assets/images/mts_building_banner_1787313949455.jpg';

interface CtaBannerProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenPpdb, onOpenVisit }) => {
  return (
    <section id="ppdb-banner" className="w-full pt-12 pb-6 bg-[#042416] text-white relative overflow-hidden">
      {/* Subtle Islamic Geometric Watermark Pattern across the banner */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.04]" colorClass="text-[#d49b28]" />

      {/* Decorative ambient lighting glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f5735]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d49b28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#06331e]/95 border border-[#16603b] rounded-2xl p-6 sm:p-8 lg:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xs">
          {/* Tazhib filigree corner flourishes */}
          <TazhibCornerOrnament position="top-left" className="opacity-30" />
          <TazhibCornerOrnament position="bottom-right" className="opacity-30" />

          {/* 3-Column Balanced Grid with ample column spacing and clear breathing room */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* 1. Left Column (Brand & Socials) - 3.5 to 4 cols */}
            <div className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-between h-full pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#155a37] pb-6 lg:pb-0">
              <div>
                {/* Official MTs Asih Putera Logo & Brand */}
                <div className="mb-4">
                  <OfficialLogo variant="white" height={40} className="w-auto bg-transparent" />
                </div>

                {/* Short Description */}
                <p className="text-emerald-100/85 text-xs sm:text-sm leading-relaxed mb-5">
                  MTs Asih Putera membina remaja beriman, bernalar, berkarakter, dan siap membawa manfaat.
                </p>
              </div>

              {/* Row of 4 minimalist social media circular icon buttons */}
              <div>
                <p className="text-[10px] text-emerald-200/70 font-semibold uppercase tracking-wider mb-2">
                  Media Sosial:
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram MTs Asih Putera"
                    className="w-8 h-8 rounded-full bg-[#0a4328] hover:bg-[#d49b28] text-white border border-[#1b6b42] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook MTs Asih Putera"
                    className="w-8 h-8 rounded-full bg-[#0a4328] hover:bg-[#d49b28] text-white border border-[#1b6b42] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube MTs Asih Putera"
                    className="w-8 h-8 rounded-full bg-[#0a4328] hover:bg-[#d49b28] text-white border border-[#1b6b42] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok MTs Asih Putera"
                    className="w-8 h-8 rounded-full bg-[#0a4328] hover:bg-[#d49b28] text-white border border-[#1b6b42] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .594.044.877.13V9.41a6.33 6.33 0 0 0-.877-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.47V8.75a8.18 8.18 0 0 0 4.91 1.63V6.93a4.85 4.85 0 0 1-1-.24z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Center Column (Headline & Action Buttons) - 5 cols */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-center lg:text-left lg:pr-4">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-2xl font-bold text-white mb-2 leading-snug">
                Bergabunglah Bersama MTs Asih Putera
              </h2>

              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl">
                Mendampingi remaja tumbuh beriman, bernalar, berkarakter, dan siap melangkah ke masa depan.
              </p>

              {/* Two Action Buttons Side-by-Side with strict no-wrap and dedicated margins */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                {/* Solid gold-brown button */}
                <button
                  id="cta-daftar-ppdb-banner"
                  onClick={onOpenPpdb}
                  className="bg-[#c89635] hover:bg-[#b07d1e] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group shrink-0 whitespace-nowrap"
                >
                  <span>Daftar PPDB Sekarang</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Dark-green outlined button */}
                <button
                  id="cta-kunjungi-sekolah-banner"
                  onClick={onOpenVisit}
                  className="bg-[#052b19]/80 hover:bg-[#0d4f30] border border-[#2fa866]/60 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer group shrink-0 whitespace-nowrap"
                >
                  <span>Kunjungi Sekolah</span>
                  <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 3. Right Column (Independent QR Code & Building Container) - 3 to 3.5 cols */}
            <div className="lg:col-span-3 xl:col-span-3.5 w-full lg:pl-2">
              <div className="relative rounded-xl overflow-hidden border border-[#1b6b42] shadow-xl min-h-[160px] flex items-center w-full">
                {/* Background building photo with tree canopy */}
                <img
                  src={imgBuildingBanner}
                  alt="Gedung Kampus MTs Asih Putera"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Deep dark green gradient overlay for text and QR contrast */}
                <div className="absolute inset-0 bg-linear-to-r from-[#032013]/95 via-[#032013]/85 to-[#032013]/60" />

                {/* QR Code Container & Text Content */}
                <div className="relative z-10 p-4 flex items-center gap-3.5 w-full">
                  {/* White Square Container with crisp QR Code */}
                  <a
                    href="https://wa.me/6281122334455?text=Halo%20Admin%20MTs%20Asih%20Putera,%20saya%20ingin%20konsultasi%20mengenai%20PPDB"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Klik untuk membuka WhatsApp"
                    className="bg-white p-2 rounded-xl shadow-lg border-2 border-[#d49b28] hover:scale-105 transition-transform flex items-center justify-center shrink-0 cursor-pointer group"
                  >
                    <svg
                      className="w-16 h-16 sm:w-18 sm:h-18 text-[#042817]"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                    >
                      {/* Corner Finder Pattern: Top-Left */}
                      <rect x="5" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="13" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      {/* Corner Finder Pattern: Top-Right */}
                      <rect x="67" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="75" y="13" width="12" height="12" rx="1" fill="currentColor" />

                      {/* Corner Finder Pattern: Bottom-Left */}
                      <rect x="5" y="67" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="13" y="75" width="12" height="12" rx="1" fill="currentColor" />

                      {/* Alignment Square */}
                      <rect x="69" y="69" width="18" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="74" y="74" width="8" height="8" fill="currentColor" />

                      {/* Timing & Data modules */}
                      <rect x="38" y="9" width="5" height="5" />
                      <rect x="48" y="9" width="5" height="5" />
                      <rect x="58" y="9" width="5" height="5" />

                      <rect x="9" y="38" width="5" height="5" />
                      <rect x="9" y="48" width="5" height="5" />
                      <rect x="9" y="58" width="5" height="5" />

                      <rect x="38" y="38" width="6" height="6" fill="#c89635" />
                      <rect x="48" y="38" width="5" height="5" />
                      <rect x="57" y="38" width="5" height="5" />

                      <rect x="38" y="48" width="5" height="5" />
                      <rect x="47" y="48" width="6" height="6" fill="#c89635" />
                      <rect x="57" y="48" width="5" height="5" />

                      <rect x="38" y="58" width="5" height="5" />
                      <rect x="48" y="58" width="5" height="5" />
                      <rect x="58" y="58" width="6" height="6" fill="#c89635" />

                      <rect x="38" y="68" width="5" height="5" />
                      <rect x="48" y="78" width="5" height="5" />
                      <rect x="38" y="88" width="5" height="5" />
                      <rect x="48" y="88" width="5" height="5" />

                      <rect x="68" y="38" width="5" height="5" />
                      <rect x="78" y="38" width="5" height="5" />
                      <rect x="88" y="38" width="5" height="5" />

                      <rect x="68" y="48" width="5" height="5" />
                      <rect x="78" y="58" width="5" height="5" />
                      <rect x="88" y="48" width="5" height="5" />
                    </svg>
                  </a>

                  {/* Text next to the QR Code */}
                  <div>
                    <span className="inline-block text-[10px] font-bold text-[#e5a93c] uppercase tracking-wider mb-1">
                      WhatsApp PPDB
                    </span>
                    <p className="text-xs text-white font-medium leading-snug">
                      Scan untuk konsultasi & info PPDB melalui WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
