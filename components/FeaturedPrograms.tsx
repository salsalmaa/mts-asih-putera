import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Medal,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { ProgramItem } from '../types';
import { featuredProgramsService } from '../services/featuredProgramsServices'; // <-- Menggunakan service featured programs
import {
  IslamicCanvasWatermark,
  TazhibCompactCorner,
  TazhibCornerOrnament,
  IslamicHeaderMedallion
} from './IslamicElements';

interface FeaturedProgramsProps {
  onSelectProgram: (program: ProgramItem) => void;
  onOpenAllPrograms: () => void;
}

export const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({
  onSelectProgram,
  onOpenAllPrograms,
}) => {
  const [programsList, setProgramsList] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        // Memanggil service featured programs
        const responseData = await featuredProgramsService.getFeaturedPrograms();
        
        const resultData = responseData?.Data?.Content || responseData?.Data || responseData?.data || responseData;
        const rawData = Array.isArray(resultData) ? resultData : [];
        
        const formattedPrograms: ProgramItem[] = rawData.map((item: any, index: number) => {
          const rawDesc = item.Content || item.Description || item.ShortDescription || '';
          const cleanDesc = rawDesc.replace(/<\/?[^>]+(>|$)/g, "");

          return {
            id: item.ContentId || index + 1,
            title: item.Title || 'Program Unggulan',
            description: cleanDesc,
            image: item.SignedThumbnail || item.Thumbnail || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
            category: item.Category || '',
            highlights: item.Highlights || [],
          };
        });

        setProgramsList(formattedPrograms);
      } catch (err: any) {
        console.error('Gagal mengambil data program unggulan:', err);
        setError('Gagal memuat program unggulan.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section id="program" className="w-full py-10 sm:py-14 bg-[#faf9f5] relative overflow-hidden">
      {/* 1. Background Texture: Islamic geometric pattern as background watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading with Islamic Medallion Accents */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <IslamicHeaderMedallion />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a4b2f] tracking-tight">
              Program Unggulan yang Menghidupkan Nilai
            </h2>
            <IslamicHeaderMedallion isFlipped />
          </div>
          
        </div>

        {/* Layout: Left Highlights Card + Right Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Left Dark Green Highlights Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#073922] text-white rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-md relative overflow-hidden border border-[#0d5333]/50">
            {/* Islamic Tazhib Gold Corner Ornaments for Highlights Card */}
            <TazhibCornerOrnament position="top-left" className="opacity-60" />
            <TazhibCornerOrnament position="top-right" className="opacity-60" />
            <TazhibCornerOrnament position="bottom-left" className="opacity-60" />
            <TazhibCornerOrnament position="bottom-right" className="opacity-60" />

            {/* Background watermarked pattern */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
                Prestasi & Karya Nyata
              </h3>

              <div className="space-y-7">
                {/* 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl text-[#e5a93c] leading-tight">
                      100+
                    </div>
                    <div className="text-xs text-gray-200 mt-0.5 leading-snug">
                      Prestasi Akademik & Non Akademik
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                    <Medal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl text-[#e5a93c] leading-tight">
                      Juara
                    </div>
                    <div className="text-xs text-gray-200 mt-0.5 leading-snug">
                      lomba tingkat kota & provinsi
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0e5131] flex items-center justify-center shrink-0 text-[#e5a93c] shadow-xs">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl text-[#e5a93c] leading-tight">
                      Karya
                    </div>
                    <div className="text-xs text-gray-200 mt-0.5 leading-snug">
                      proyek dan kontribusi sosial siswa
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#135d39] mt-8 relative z-10">
              <p className="text-xs text-gray-300 italic">
                "Mendidik setiap potensi anak dengan keteladanan, pembiasaan baik, dan kemandirian."
              </p>
            </div>
          </div>

          {/* Right Program Cards Grid (8 cols) */}
          <div className="lg:col-span-8">
            {loading ? (
              <div className="flex items-center justify-center h-full min-h-[250px] text-[#0a4b2f] text-sm font-medium">
                Memuat program unggulan...
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full min-h-[250px] text-red-500 text-sm font-medium">
                {error}
              </div>
            ) : programsList.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[250px] text-gray-500 text-sm font-medium">
                Belum ada program unggulan tersedia.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4.5">
                {programsList.slice(0, 6).map((program) => (
                  <div
                    key={program.id}
                    onClick={() => onSelectProgram(program)}
                    className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#0a4b2f]/50 transition-all flex flex-col cursor-pointer group"
                  >
                    {/* 2. Delicate Dark-Green & Gold Islamic Filigree (Tazhib) Corner Flourishes */}
                    <TazhibCompactCorner position="top-left" color="#0a4b2f" accentColor="#c89635" />
                    <TazhibCompactCorner position="top-right" color="#0a4b2f" accentColor="#c89635" />
                    <TazhibCompactCorner position="bottom-left" color="#0a4b2f" accentColor="#c89635" />
                    <TazhibCompactCorner position="bottom-right" color="#0a4b2f" accentColor="#c89635" />

                    {/* Photo */}
                    <div className="h-36 sm:h-38 relative overflow-hidden bg-gray-100">
                      <img
                        src={program.image}
                        alt={program.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      {/* Subtle inner frame border */}
                      <div className="absolute inset-0 border-b border-[#0a4b2f]/15 pointer-events-none"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between relative z-10 bg-white">
                      <h4 className="font-serif font-bold text-sm sm:text-[14.5px] text-[#0a4b2f] leading-snug group-hover:text-[#d49b28] transition-colors text-center line-clamp-2">
                        {program.title}
                      </h4>
                      <div className="text-[11px] text-gray-500 text-center mt-2 flex items-center justify-center gap-1 font-medium">
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-3 h-3 text-[#0a4b2f] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            id="all-programs-btn"
            onClick={onOpenAllPrograms}
            className="bg-[#0a4b2f] hover:bg-[#073621] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-md shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Lihat Semua Program</span>
            <ArrowRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};