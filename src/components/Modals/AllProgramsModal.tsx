import React, { useState, useMemo } from 'react';
import { X, ArrowRight, Sparkles, Filter, CheckCircle } from 'lucide-react';
import { ProgramItem } from '../../types';
import {
  TazhibCompactCorner,
  TazhibCornerOrnament,
  IslamicHeaderMedallion
} from '../IslamicElements';

interface AllProgramsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (program: ProgramItem) => void;
  programs: ProgramItem[];
}

export const AllProgramsModal: React.FC<AllProgramsModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
  programs,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'Semua Program (11)' },
      { id: 'spiritual', label: 'Spiritual & Adab' },
      { id: 'akademik', label: 'Akademik & Inovasi' },
      { id: 'karakter', label: 'Karakter & Budaya' },
      { id: 'lifeskills', label: 'Life Skills & Sosial' },
    ];
  }, []);

  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'all') return programs;
    if (activeCategory === 'spiritual') {
      return programs.filter(
        (p) =>
          p.category.toLowerCase().includes('spiritual') ||
          p.category.toLowerCase().includes('tahfidz') ||
          p.category.toLowerCase().includes('adab')
      );
    }
    if (activeCategory === 'akademik') {
      return programs.filter(
        (p) =>
          p.category.toLowerCase().includes('akademik') ||
          p.category.toLowerCase().includes('sains') ||
          p.category.toLowerCase().includes('literasi') ||
          p.category.toLowerCase().includes('riset')
      );
    }
    if (activeCategory === 'karakter') {
      return programs.filter(
        (p) =>
          p.category.toLowerCase().includes('karakter') ||
          p.category.toLowerCase().includes('budaya') ||
          p.category.toLowerCase().includes('kepemimpinan') ||
          p.category.toLowerCase().includes('seni')
      );
    }
    if (activeCategory === 'lifeskills') {
      return programs.filter(
        (p) =>
          p.category.toLowerCase().includes('life skills') ||
          p.category.toLowerCase().includes('sosial') ||
          p.category.toLowerCase().includes('kemandirian') ||
          p.category.toLowerCase().includes('pengabdian')
      );
    }
    return programs;
  }, [programs, activeCategory]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#faf9f5] w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-[#145e39]/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Deep Green Header Banner with Gold Islamic Tazhib Ornaments */}
        <div className="relative bg-[#073922] text-white p-5 sm:p-7 shrink-0 overflow-hidden border-b border-[#125c38]">
          <TazhibCornerOrnament position="top-left" className="opacity-50" />
          <TazhibCornerOrnament position="top-right" className="opacity-50" />

          {/* Close button */}
          <button
            id="close-all-programs-modal"
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 max-w-2xl pr-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d49b28]/25 border border-[#e5a93c]/50 text-[#e5a93c] text-[10.5px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Katalog Lengkap Program</span>
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight mb-2">
              Program Unggulan MTs Asih Putera
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              11 program pendidikan holistik terpadu yang memadukan pembiasaan tauhid & adab, ketajaman sains akademik, kemandirian life skills, kepemimpinan, dan kepedulian sosial.
            </p>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="px-5 sm:px-7 py-3 bg-white border-b border-gray-200 shrink-0 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0a4b2f] pr-2 shrink-0 border-r border-gray-200">
            <Filter className="w-3.5 h-3.5" />
            <span>Kategori:</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0a4b2f] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Scrollable Body: Uniform 11 Program Cards Grid */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 bg-[#faf9f5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                onClick={() => {
                  onClose();
                  onSelectProgram(program);
                }}
                className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#0a4b2f]/50 transition-all flex flex-col cursor-pointer group"
              >
                {/* Delicate Dark-Green & Gold Islamic Filigree (Tazhib) Corner Flourishes */}
                <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" />
                <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

                {/* Photo Header */}
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <img
                    src={program.image}
                    alt={program.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                  {/* Category badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-sm bg-[#073922]/90 backdrop-blur-xs text-[#e5a93c] text-[9.5px] font-bold uppercase tracking-wider border border-[#e5a93c]/30 shadow-xs">
                      {program.category}
                    </span>
                  </div>

                  {/* Subtle inner frame border */}
                  <div className="absolute inset-0 border-b border-[#0a4b2f]/15 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-[14.5px] text-[#0a4b2f] leading-snug group-hover:text-[#d49b28] transition-colors text-center">
                      {program.title}
                    </h4>
                    <p className="text-[11.5px] text-gray-600 line-clamp-2 text-center mt-2 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 mt-3 text-[11px] text-[#0a4b2f] group-hover:text-[#d49b28] font-semibold text-center flex items-center justify-center gap-1">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3 h-3 text-[#0a4b2f] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between shrink-0 px-6">
          <div className="text-xs text-gray-500">
            Menampilkan <span className="font-bold text-[#0a4b2f]">{filteredPrograms.length}</span> dari {programs.length} program
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0a4b2f] hover:bg-[#073621] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
