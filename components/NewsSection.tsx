import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { NewsItem } from '../types';
import { newsService } from '../services/newsServices';
import { NEWS_DATA } from '../data/schoolData';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
  onOpenAllNews: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews, onOpenAllNews }) => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const responseData = await newsService.getNews();

        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];

        if (rawData.length > 0) {
          const formattedNews: NewsItem[] = rawData.map((item: any, index: number) => {
            const rawExcerpt = item.ShortDescription || item.Content || '';
            const cleanExcerpt = rawExcerpt.replace(/<\/?[^>]+(>|$)/g, '');
            const rawFullContent = item.Content || item.FullContent || '';
            const cleanFullContent = rawFullContent.replace(/<\/?[^>]+(>|$)/g, '');

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
          setNewsList(NEWS_DATA);
        }
      } catch (err: any) {
        console.warn('Gagal mengambil berita dari API, menggunakan data fallback lokal:', err);
        setNewsList(NEWS_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const featuredNews = newsList[featuredIndex] || null;
  // Sidebar: show up to 5 items that are not the featured one
  const sidebarNews = newsList.filter((_, i) => i !== featuredIndex).slice(0, 5);

  const totalDots = Math.min(newsList.length, 6);

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev - 1 + newsList.length) % newsList.length);
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % newsList.length);
  };

  return (
    <section id="publikasi" className="w-full py-12 sm:py-16 bg-[#f5f4ee] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* ── Top Header Row ── */}
        <div className="mb-8 text-center">
          {/* Label badge */}
          <span className="inline-flex items-center gap-1.5 bg-[#0a4b2f]/10 text-[#0a4b2f] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            📰 Kabar &amp; Syiar Madrasah
          </span>

          <div className="flex flex-col items-center gap-2">
            <div>
              <h2 className="font-sans text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Berita &amp; Kegiatan Terbaru
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
                Ikuti dokumentasi aktivitas pembinaan akhlak, capaian prestasi, dan syiar keislaman santri MTs Asih Putera.
              </p>
            </div>
          </div>
        </div>

        {/* ── Loading / Error / Empty ── */}
        {loading ? (
          <div className="text-center py-16 text-gray-400 text-base">Memuat berita...</div>
        ) : error ? (
          <div className="text-center py-16 text-red-500 text-base">{error}</div>
        ) : newsList.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-base">Belum ada berita tersedia.</div>
        ) : (
          /* ── Two-column layout ── */
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 xl:gap-8">

            {/* ══ LEFT: Featured Card ══ */}
            {featuredNews && (
              <div className="flex flex-col">
                <div
                  onClick={() => onSelectNews(featuredNews)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group flex-1"
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-80 lg:h-[340px] overflow-hidden bg-gray-100">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Badges top-left */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-[#0a4b2f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        ★ Berita Utama (PIN)
                      </span>
                      <span className="bg-[#d49b28] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {featuredNews.category}
                      </span>
                    </div>

                    {/* Read time bottom-right */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>3 menit baca</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        asih putera
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-2xl sm:text-3xl text-[#1a1a1a] group-hover:text-[#0a4b2f] transition-colors leading-snug mb-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {featuredNews.title}
                    </h3>

                    {/* Excerpt — expanded, no button */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-6">
                      {featuredNews.excerpt}
                    </p>
                  </div>
                </div>

                {/* Navigation: prev / dots / next */}
                {newsList.length > 1 && (
                  <div className="flex items-center justify-between mt-4 px-1">
                    {/* Prev button */}
                    <button
                      onClick={handlePrev}
                      aria-label="Berita sebelumnya"
                      className="flex items-center gap-1.5 text-[#0a4b2f] hover:text-white bg-white hover:bg-[#0a4b2f] border border-[#0a4b2f]/30 hover:border-[#0a4b2f] font-semibold text-xs px-3 py-2 rounded-full shadow-sm transition-all cursor-pointer group/prev"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 group-hover/prev:-translate-x-0.5 transition-transform" />
                      <span>Sebelumnya</span>
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalDots }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setFeaturedIndex(idx)}
                          aria-label={`Tampilkan berita ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            featuredIndex === idx
                              ? 'w-7 bg-[#0a4b2f]'
                              : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Next button */}
                    <button
                      onClick={handleNext}
                      aria-label="Berita berikutnya"
                      className="flex items-center gap-1.5 text-[#0a4b2f] hover:text-white bg-white hover:bg-[#0a4b2f] border border-[#0a4b2f]/30 hover:border-[#0a4b2f] font-semibold text-xs px-3 py-2 rounded-full shadow-sm transition-all cursor-pointer group/next"
                    >
                      <span>Berikutnya</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/next:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ══ RIGHT: Sidebar ══ */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h4 className="font-semibold text-[#1a1a1a] text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d49b28] inline-block"></span>
                  Berita &amp; Agenda Lainnya
                </h4>
                <button
                  onClick={onOpenAllNews}
                  className="flex items-center gap-1.5 text-[#0a4b2f] hover:text-white bg-[#0a4b2f]/8 hover:bg-[#0a4b2f] border border-[#0a4b2f]/20 hover:border-[#0a4b2f] font-semibold text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer group/all"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Sidebar list */}
              <ul className="divide-y divide-gray-100">
                {sidebarNews.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onSelectNews(item)}
                      className="w-full flex items-start gap-3 px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer group text-left"
                    >
                      {/* Thumbnail */}
                      <div className="relative shrink-0 w-20 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category badge over thumbnail */}
                        <span className="absolute bottom-0 left-0 right-0 bg-[#0a4b2f]/80 text-white text-[9px] font-bold uppercase text-center py-0.5 truncate px-1">
                          {item.category}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        {/* Date */}
                        <span className="flex items-center gap-1 text-gray-400 text-[10px] mb-1">
                          <Calendar className="w-3 h-3 shrink-0" />
                          {item.date}
                        </span>
                        {/* Title */}
                        <p className="text-[#1a1a1a] text-xs font-semibold leading-snug line-clamp-2 group-hover:text-[#0a4b2f] transition-colors mb-1.5">
                          {item.title}
                        </p>
                        {/* Read time + Baca */}
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-gray-400 text-[10px]">
                            <Clock className="w-3 h-3" />
                            3 menit baca
                          </span>
                          <span className="flex items-center gap-0.5 text-[#0a4b2f] text-[11px] font-semibold group-hover:gap-1 transition-all">
                            Baca
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}

                {/* Empty state if sidebar is empty */}
                {sidebarNews.length === 0 && (
                  <li className="px-5 py-8 text-center text-gray-400 text-sm">
                    Belum ada berita lainnya.
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
