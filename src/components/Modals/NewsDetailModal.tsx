import React from 'react';
import { X, Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';
import { NewsItem } from '../../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onOpenPpdb: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  news,
  onClose,
  onOpenPpdb,
}) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header photo & close */}
        <div className="relative h-48 sm:h-56 shrink-0 bg-gray-900">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-sm bg-[#d49b28] text-white text-[10.5px] font-bold">
                {news.category}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-gray-200">
                <Calendar className="w-3 h-3" />
                <span>{news.date}</span>
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl leading-tight">
              {news.title}
            </h3>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p className="font-medium text-gray-900">
            {news.excerpt}
          </p>
          <p>
            {news.fullContent || 'MTs Asih Putera terus berkomitmen menghadirkan ekosistem pendidikan Islam modern yang menumbuhkan karakter mulia, nalar kritis, dan kepemimpinan visioner untuk generasi penerus bangsa.'}
          </p>
          <p className="text-gray-600">
            Untuk informasi lebih lanjut dan konfirmasi kehadiran dalam agenda ini, silakan hubungi narahubung panitia melalui sekretariat madrasah atau kanal resmi PPDB Asih Putera.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenPpdb();
            }}
            className="bg-[#0a4b2f] hover:bg-[#073621] text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Daftar / Konsultasi PPDB</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#e5a93c]" />
          </button>
        </div>
      </div>
    </div>
  );
};
