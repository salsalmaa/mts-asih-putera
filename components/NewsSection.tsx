import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsItem } from '../types';
import { newsService } from '../services/newsServices'; // <-- Menggunakan service berita
import { NEWS_DATA } from '../data/schoolData';
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        // Memanggil service berita alih-alih axios langsung
        const responseData = await newsService.getNews();
        
        // Ambil array dari respons data service
        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];
        
        if (rawData.length > 0) {
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
        } else {
          // Fallback jika API mengembalikan data kosong
          setNewsList(NEWS_DATA);
        }
      } catch (err: any) {
        console.warn('Gagal mengambil berita dari API, menggunakan data fallback lokal:', err);
        // Fallback ke NEWS_DATA lokal jika API error/down
        setNewsList(NEWS_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handlePrev = () => {
    if (newsList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + newsList.length) % newsList.length);
  };

  const handleNext = () => {
    if (newsList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % newsList.length);
  };

  const currentItem = newsList[currentIndex] || newsList[0];

  return (
    <section id="publikasi" className="w-full py-12 sm:py-16 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Background Islamic Geometric Watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      {/* Subtle Mosque Silhouette Watermark */}
      <MosqueSilhouetteWatermark className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallions - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a4b2f] tracking-tight">
              Berita, Agenda & Galeri
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>
          {/* Subtle gold ornamental accent */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-12 bg-[#d49b28]/60"></span>
            <div className="w-2 h-2 rotate-45 bg-[#d49b28]"></div>
            <span className="h-0.5 w-12 bg-[#d49b28]/60"></span>
          </div>
        </div>

        {/* Loading / Error States */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 text-base">Memuat berita...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 text-base">{error}</div>
        ) : newsList.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-base">Belum ada berita tersedia.</div>
        ) : (
          /* Carousel Highlight Slider Layout */
          <div className="relative">
            {/* Main Slide Card */}
            {currentItem && (
              <div
                onClick={() => onSelectNews(currentItem)}
                className="relative bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xl hover:shadow-2xl hover:border-[#0a4b2f]/50 transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[440px]"
              >
                <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

                {/* Left Photo Container (No date overlay, full photo) */}
                <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto bg-gray-100 overflow-hidden relative shrink-0">
                  <img
                    key={currentItem.id + '-img'}
                    src={currentItem.image}
                    alt={currentItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Right Content Body */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center bg-white relative z-10">
                  <div>
                    <span className="inline-block bg-[#0a4b2f]/10 text-[#0a4b2f] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 w-max">
                      {currentItem.category}
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors mb-4 leading-snug">
                      {currentItem.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-5">
                      {currentItem.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Slider Navigation Controls & Indicator Dots */}
            <div className="flex items-center justify-between mt-6 px-2 sm:px-4">
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Berita Sebelumnya"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a4b2f] hover:bg-[#073621] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group shrink-0"
              >
                <ChevronLeft className="w-6 h-6 text-[#e5a93c] group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-3">
                {newsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Ke berita ${idx + 1}`}
                    className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-9 bg-[#d49b28]'
                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Berita Selanjutnya"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a4b2f] hover:bg-[#073621] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group shrink-0"
              >
                <ChevronRight className="w-6 h-6 text-[#e5a93c] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onOpenAllNews}
            className="bg-[#0a4b2f] hover:bg-[#073621] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-sm hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Lihat Semua Berita & Galeri</span>
            <ArrowRight className="w-5 h-5 text-[#e5a93c] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};