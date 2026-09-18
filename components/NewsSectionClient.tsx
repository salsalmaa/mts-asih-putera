"use client";

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { NewsItem } from '../types';
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion,
  MosqueSilhouetteWatermark
} from './IslamicElements';

interface NewsSectionClientProps {
  newsList: NewsItem[];
  loading: boolean;
  error: string | null;
  onSelectNews: (news: NewsItem) => void;
  onOpenAllNews: () => void;
}

export const NewsSectionClient: React.FC<NewsSectionClientProps> = ({
  newsList,
  loading,
  error,
  onSelectNews,
  onOpenAllNews,
}) => {
  const featuredNews = newsList.length > 0 ? newsList[0] : null;
  const sideNewsList = newsList.slice(1, 6);

  return (
    <section id="publikasi" className="w-full py-12 sm:py-16 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Background Islamic Geometric Watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* Subtle Mosque Silhouette Watermark */}
      <MosqueSilhouetteWatermark className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading dengan Medali di Kiri & Kanan agar Seimbang */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0a4b2f]/15 pb-8 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3.5 mb-2">
              <IslamicHeaderMedallion />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
                Berita & Kegiatan Terbaru
              </h2>
              <IslamicHeaderMedallion isFlipped />
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl font-serif">
              Ikuti dokumentasi aktivitas pembinaan akhlak, capaian prestasi, dan syiar keislaman.
            </p>
          </div>

          {/* Tombol "Lihat Semua Berita" */}
          <button
            onClick={onOpenAllNews}
            className="bg-white hover:bg-[#0a4b2f] text-[#0a4b2f] hover:text-white border border-[#0a4b2f]/30 font-semibold text-sm px-6 py-2.5 rounded-lg shadow-xs transition-all flex items-center gap-2 cursor-pointer group shrink-0 self-center md:self-end"
          >
            <span>Lihat Semua Berita</span>
            <span className="bg-[#0a4b2f]/10 group-hover:bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {newsList.length}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Loading / Error States */}
        {loading ? (
          <div className="text-center py-16 text-[#0a4b2f] font-medium text-sm">Memuat berita dari server...</div>
        ) : error ? (
          <div className="text-center py-16 text-red-500 text-sm">{error}</div>
        ) : newsList.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-sm">Belum ada berita tersedia.</div>
        ) : (
          /* Layout Asimetris: Berita Utama (Kiri) & Daftar Berita Samping (Kanan) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* KIRI: FEATURED ARTICLE (Lebar Dominan 7 Kolom) */}
            {featuredNews && (
              <div
                onClick={() => onSelectNews(featuredNews)}
                className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#0a4b2f]/20 shadow-sm hover:shadow-lg hover:border-[#0a4b2f]/50 transition-all flex flex-col cursor-pointer group relative"
              >
                <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />

                {/* Foto Lebih Dominan & Sinematik */}
                <div className="relative h-72 sm:h-105 overflow-hidden bg-gray-100">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Badge Utama */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <span className="bg-[#d49b28] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wider uppercase">
                      #BERITA UTAMA
                    </span>
                    <span className="bg-[#0a4b2f]/90 text-[#f4ecd8] text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-xs border border-[#d49b28]/30">
                      {featuredNews.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d49b28]" />
                    <span>3 menit baca</span>
                  </div>
                </div>

                {/* Konten Utama */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white relative z-10">
                  <div>
                    {/* Metadata Kecil */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="font-semibold text-[#0a4b2f]">{featuredNews.date}</span>
                      <span>•</span>
                      <span>Humas Madrasah</span>
                    </div>

                    {/* Title Lebih Besar */}
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors mb-3 leading-snug">
                      {featuredNews.title}
                    </h3>

                    {/* Excerpt Singkat */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 font-serif">
                      {featuredNews.excerpt}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* KANAN: BERITA SAMPING (Lebar 5 Kolom - Ringkas & Bersih) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-1 px-1">
                <h3 className="font-serif font-bold text-base text-[#0a4b2f] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d49b28]"></span>
                  Berita & Agenda Lainnya
                </h3>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Terbaru</span>
              </div>

              {sideNewsList.length === 0 ? (
                <div className="bg-white p-6 rounded-xl border border-gray-200 text-center text-xs text-gray-400">
                  Belum ada berita lainnya.
                </div>
              ) : (
                sideNewsList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectNews(item)}
                    className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#0a4b2f]/40 transition-all cursor-pointer group flex gap-3.5 items-center relative overflow-hidden"
                  >
                    {/* Thumbnail Kecil */}
                    <div className="w-20 h-20 sm:w-24 sm:h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Informasi Ringkas: Title + Date Saja */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-1">
                        <span className="text-[#0a4b2f] font-semibold">{item.date}</span>
                        <span>•</span>
                        <span className="text-gray-400 truncate max-w-[120px]">{item.category}</span>
                      </div>

                      <h4 className="font-serif font-bold text-xs sm:text-[13px] text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};