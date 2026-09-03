import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';
import { newsService } from '../services/newsServices'; // <-- Menggunakan service berita
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  IslamicHeaderMedallion,
  MosqueSilhouetteWatermark
} from './IslamicElements';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
  onOpenAllNews: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews, onOpenAllNews }) => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Memanggil service berita alih-alih axios langsung
        const responseData = await newsService.getNews();
        
        // Ambil array dari respons data service
        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];
        
        const formattedNews: NewsItem[] = rawData.map((item: any, index: number) => {
          // Membersihkan tag HTML seperti <p>, </p>, dll dari excerpt
          const rawExcerpt = item.ShortDescription || item.Content || '';
          const cleanExcerpt = rawExcerpt.replace(/<\/?[^>]+(>|$)/g, "");

          // Membersihkan tag HTML dari fullContent agar teks bersih dari tag <p> dan atributnya
          const rawFullContent = item.Content || item.FullContent || '';
          const cleanFullContent = rawFullContent.replace(/<\/?[^>]+(>|$)/g, "");

          return {
            id: item.ContentId || item.Id || item.id || index + 1,
            title: item.Title || item.Category || 'Berita Terbaru',
            excerpt: cleanExcerpt,
            image: item.SignedThumbnail || item.Image || item.image || '',
            day: item.Day || '01',
            monthYear: item.MonthYear || 'JAN 2026',
            date: item.Date || `${item.Day || '01'} ${item.MonthYear || 'JAN 2026'}`,
            category: item.Category || 'Berita',
            fullContent: cleanFullContent,
          };
        });

        setNewsList(formattedNews);
      } catch (err: any) {
        console.error('Gagal mengambil berita:', err);
        setError('Gagal memuat berita.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="publikasi" className="w-full py-16 sm:py-24 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Background Islamic Geometric Watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* Subtle Mosque Silhouette Watermark */}
      <MosqueSilhouetteWatermark className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallions - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
              Berita, Agenda & Galeri
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

        {/* Loading / Error States */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 text-sm">Memuat berita...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 text-sm">{error}</div>
        ) : newsList.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">Belum ada berita tersedia.</div>
        ) : (
          /* 3 News / Events Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectNews(item)}
                className="relative bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#0a4b2f]/40 transition-all flex flex-col cursor-pointer group"
              >
                {/* Tazhib Corner Flourishes */}
                <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

                {/* Top Image Container with Left Date Badge Overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 flex">
                  {/* Left Date Ribbon matching screenshot */}
                  <div className="w-20 sm:w-24 bg-[#073922] text-white flex flex-col items-center justify-center p-2 shrink-0 z-10 text-center border-r border-[#125836]">
                    <span className="font-bold text-xs sm:text-sm leading-tight text-[#e5a93c]">
                      {item.day}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      {item.monthYear}
                    </span>
                  </div>

                  {/* Event Photo */}
                  <div className="flex-1 h-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[11.5px] font-semibold text-[#0a4b2f] group-hover:text-[#d49b28]">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenAllNews}
            className="bg-[#0a4b2f] hover:bg-[#073621] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-md shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Lihat Semua Berita & Galeri</span>
            <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};