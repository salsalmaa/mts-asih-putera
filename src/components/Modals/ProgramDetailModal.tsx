import React from 'react';
import { X, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { ProgramItem } from '../../types';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenPpdb: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenPpdb,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header photo & close */}
        <div className="relative h-48 sm:h-56 shrink-0 bg-gray-900">
          <img
            src={program.image}
            alt={program.title}
            referrerPolicy="no-referrer"
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
            <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#d49b28] text-white text-[10.5px] font-bold uppercase tracking-wider mb-1.5">
              {program.category}
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl leading-tight">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm text-gray-700">
          <div>
            <h4 className="font-bold text-gray-900 mb-1.5 text-xs uppercase tracking-wider">
              Deskripsi Program
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {program.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2.5 text-xs uppercase tracking-wider">
              Keunggulan & Fokus Aktivitas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#faf9f5] p-2.5 rounded-lg border border-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#0a4b2f] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {program.schedule && (
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-200">
              <Clock className="w-4 h-4 text-[#d49b28] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-gray-900 block">Waktu Pelaksanaan</span>
                <span className="text-xs text-gray-600">{program.schedule}</span>
              </div>
            </div>
          )}

          {program.outcomes && (
            <div className="flex items-start gap-3 p-3.5 bg-[#0a4b2f]/5 rounded-xl border border-[#0a4b2f]/20">
              <Award className="w-4 h-4 text-[#0a4b2f] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs text-[#0a4b2f] block">Target Capaian Siswa</span>
                <span className="text-xs text-gray-700">{program.outcomes}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
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
            <span>Daftar Melalui PPDB</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#e5a93c]" />
          </button>
        </div>
      </div>
    </div>
  );
};
