import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types';
import { newsService } from '../services/newsServices';
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

type CategoryFilter = 'all' | 'pengumuman' | 'prestasi' | 'keislaman';

const DEFAULT_FALLBACK_IMAGE = '/images/news_openhouse_new.jpg';
const ALT_FALLBACK_IMAGE = '/images/news_milad_new.png';

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews, onOpenAllNews }) => {
  const [newsList, setNewsList] = useState<NewsItem[]>(NEWS_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const responseData = await newsService.getNews();
        
        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];
        
        if (rawData.length > 0) {
          const formattedNews: NewsItem[] = rawData.map((item: any, index: number) => {
            const rawExcerpt = item.ShortDescription || item.Content || '';
            const cleanExcerpt = rawExcerpt.replace(/<\/?[^>]+(>|$)/g, "");

            const rawFullContent = item.Content || item.FullContent || '';
            const cleanFullContent = rawFullContent.replace(/<\/?[^>]+(>|$)/g, "");

            const rawImg = item.SignedThumbnail || item.Image || item.image || '';
            const validImg = rawImg && rawImg.trim().length > 0 ? rawImg : DEFAULT_FALLBACK_IMAGE;

            return {
              id: item.ContentId || item.Id || item.id || `api-news-${index + 1}`,
              title: item.Title || item.Category || 'Berita Utama Sekolah',
              excerpt: cleanExcerpt || 'Informasi kegiatan dan agenda penting MTs Asih Putera untuk wali murid.',
              image: validImg,
              day: item.Day || '01',
              monthYear: item.MonthYear || 'JAN 2026',
              date: item.Date || `${item.Day || '01'} ${item.MonthYear || 'JAN 2026'}`,
              category: item.Category || 'Berita & Pengumuman',
              fullContent: cleanFullContent || cleanExcerpt,
            };
          });

          if (formattedNews.length < 3) {
            const existingIds = new Set(formattedNews.map((n) => n.id));
            const extraFallback = NEWS_DATA.filter((n) => !existingIds.has(n.id));
            setNewsList([...formattedNews, ...extraFallback]);
          } else {
            setNewsList(formattedNews);
          }
        } else {
          setNewsList(NEWS_DATA);
        }
      } catch (err) {
        console.warn('📌 Gagal mengambil berita API, menggunakan data fallback lokal:', err);
        setNewsList(NEWS_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = newsList.filter((item) => {
    if (activeCategory === 'all') return true;
    const catLower = (item.category || '').toLowerCase();
    const titleLower = (item.title || '').toLowerCase();
    
    if (activeCategory === 'pengumuman') {
      return (
        catLower.includes('ppdb') ||
        catLower.includes('agenda') ||
        catLower.includes('pengumuman') ||
        titleLower.includes('ppdb') ||
        titleLower.includes('open house')
      );
    }
    if (activeCategory === 'prestasi') {
      return (
        catLower.includes('prestasi') ||
        catLower.includes('seni') ||
        catLower.includes('olimpiade') ||
        titleLower.includes('milad') ||
        titleLower.includes('juara')
      );
    }
    if (activeCategory === 'keislaman') {
      return (
        catLower.includes('tahfidz') ||
        catLower.includes('outbound') ||
        catLower.includes('kesiswaan') ||
        titleLower.includes('leadership') ||
        titleLower.includes('tahfidz')
      );
    }
    return true;
  });

  const displayNews = filteredNews.length > 0 ? filteredNews : newsList;
  const featuredNews = displayNews.length > 0 ? displayNews[0] : NEWS_DATA[0];
  const secondaryNews = displayNews.slice(1, 4).length > 0 ? displayNews.slice(1, 4) : NEWS_DATA.slice(1, 3);

  return (
    <section id="publikasi" className="w-full py-8 sm:py-12 bg-[#faf8f3] relative overflow-hidden">
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />
      <MosqueSilhouetteWatermark className="opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Title Section - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
              Berita & Pengumuman Sekolah
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <span className="h-0.5 w-12 bg-[#d49b28]/60"></span>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></div>
            <span className="h-0.5 w-12 bg-[#d49b28]/60"></span>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Kumpulan kabar kegiatan santri, agenda penting pendaftaran, dan informasi resmi untuk Orang Tua & Wali Murid MTs Asih Putera.
          </p>
        </div>

        {/* Category Filter Tabs with Font Awesome Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {[
            { id: 'all', label: 'Semua Berita', icon: 'fa-solid fa-layer-group' },
            { id: 'pengumuman', label: 'Pengumuman Wali Murid', icon: 'fa-solid fa-bullhorn' },
            { id: 'prestasi', label: 'Prestasi & Karakter', icon: 'fa-solid fa-award' },
            { id: 'keislaman', label: 'Kegiatan Keislaman', icon: 'fa-solid fa-kaaba' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#d49b28] text-white shadow-sm scale-102 font-bold'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-2xs'
                }`}
              >
                <i className={`${tab.icon} text-xs opacity-90`}></i>
                <span>{tab.label}</span>
                {isActive && <i className="fa-solid fa-check text-xs ml-1"></i>}
              </button>
            );
          })}
        </div>

        {/* MODEL LAYOUT: MAJALAH VISUAL ORANG TUA */}
        <div className="space-y-6">
          
          {/* 1. HERO FEATURED CARD */}
          {featuredNews && (
            <div
              onClick={() => onSelectNews(featuredNews)}
              className="bg-white rounded-3xl overflow-hidden border-2 border-[#0a4b2f]/20 shadow-md hover:shadow-xl transition-all cursor-pointer group relative grid grid-cols-1 lg:grid-cols-12"
            >
              <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
              <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />

              {/* Left Thumbnail */}
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-[#0a4b2f]/10 overflow-hidden">
                <img
                  src={featuredNews.image || DEFAULT_FALLBACK_IMAGE}
                  alt={featuredNews.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== DEFAULT_FALLBACK_IMAGE) {
                      target.src = DEFAULT_FALLBACK_IMAGE;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                  <span className="bg-[#d49b28] text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                    <i className="fa-solid fa-bookmark text-xs"></i>
                    <span>BERITA UTAMA</span>
                  </span>

                  <span className="bg-[#0a4b2f]/90 text-[#e5a93c] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs border border-[#e5a93c]/40">
                    {featuredNews.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-white bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                  <i className="fa-regular fa-calendar text-[#e5a93c]"></i>
                  <span>{featuredNews.date}</span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white relative z-10">
                <div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-semibold">
                    <span className="text-[#0a4b2f] flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-[#d49b28]"></i>
                      {featuredNews.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <i className="fa-regular fa-clock text-gray-400"></i>
                      3 Menit Baca
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors mb-3 sm:mb-4 leading-snug">
                    {featuredNews.title}
                  </h3>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed line-clamp-4 mb-4 sm:mb-6">
                    {featuredNews.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs font-semibold text-[#0a4b2f] bg-[#0a4b2f]/8 px-3 py-1.5 rounded-lg">
                    Oleh: Humas MTs Asih Putera
                  </span>

                  <button className="bg-[#0a4b2f] hover:bg-[#073421] text-[#e5a93c] font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2.5 cursor-pointer">
                    <span>Baca Berita Selengkapnya</span>
                    <i className="fa-solid fa-arrow-right text-sm text-[#e5a93c] group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. SECONDARY NEWS GRID */}
          {secondaryNews.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0a4b2f] flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d49b28]"></span>
                  Warta & Berita Lainnya
                </h3>
                
                <button
                  onClick={onOpenAllNews}
                  className="bg-white hover:bg-[#0a4b2f] text-[#0a4b2f] hover:text-white border border-[#0a4b2f]/30 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-2xs transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Lihat Semua Berita</span>
                  <i className="fa-solid fa-arrow-right text-xs text-[#e5a93c] group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryNews.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    onClick={() => onSelectNews(item)}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-lg hover:border-[#0a4b2f]/40 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                      <img
                        src={item.image || (idx % 2 === 0 ? DEFAULT_FALLBACK_IMAGE : ALT_FALLBACK_IMAGE)}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== DEFAULT_FALLBACK_IMAGE) {
                            target.src = DEFAULT_FALLBACK_IMAGE;
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#0a4b2f]/90 text-[#e5a93c] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                        {item.category}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                        <i className="fa-regular fa-calendar text-[#e5a93c] text-xs"></i>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-gray-500 font-semibold mb-2">
                          {item.date}
                        </div>
                        
                        <h4 className="font-serif font-bold text-lg text-[#0a4b2f] group-hover:text-[#d49b28] transition-colors leading-snug mb-3 line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed mb-4">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500">3 Min Baca</span>
                        <span className="bg-[#0a4b2f]/10 group-hover:bg-[#0a4b2f] text-[#0a4b2f] group-hover:text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5">
                          <span>Baca Artikel</span>
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};