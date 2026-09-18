import React from 'react';
import {
  BookOpen,
  Users,
  Sprout,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { IslamicCanvasWatermark } from './IslamicElements';

export const StatsBar: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-[#e5b659] stroke-[2]" />,
      value: "100%",
      label: "Pendidikan Islam Kokoh"
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10 text-[#e5b659] stroke-[2]" />,
      value: "24/7",
      label: "Pendampingan Guru"
    },
    {
      id: 3,
      icon: <Sprout className="w-10 h-10 text-[#e5b659] stroke-[2]" />,
      value: "Nyata",
      label: "Pengalaman & Praktik"
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-10 h-10 text-[#e5b659] stroke-[2]" />,
      value: "Aman",
      label: "Lingkungan & Peduli"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#083827] via-[#0d2e20] to-[#052419] relative overflow-hidden text-white border-y border-[#c49a43]/40 shadow-2xl">
      {/* Background Watermark Islami Halus */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.06]" colorClass="text-[#c49a43]" />

      {/* Efek Ambient Cahaya Belakang */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#c49a43]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full mx-auto relative z-10 flex flex-col lg:flex-row items-stretch justify-between">
        
        {/* Bagian Kiri: 4 Kolom dengan Spacing Lebih Longgar */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 py-7 sm:py-9 flex-1 flex items-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full items-center gap-6 lg:gap-8">
            {features.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center px-4 py-2 relative group transition-all duration-300 ${
                  index > 0 ? 'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-14 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#c49a43]/50 before:to-transparent' : ''
                }`}
              >
                {/* Ikon Diperbesar */}
                <div className="mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(229,182,89,0.3)]">
                  {item.icon}
                </div>

                {/* Nilai/Value Lebih Dominan & Menarik Perhatian */}
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#f5d082] tracking-tight drop-shadow-sm mb-0.5">
                  {item.value}
                </span>

                {/* Label Lebih Kecil & Rapi */}
                <span className="font-sans text-[11px] sm:text-xs text-gray-200 leading-snug tracking-wider uppercase font-medium max-w-[150px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Kanan: Box Putih Miring (Polygon) Elegan */}
        <div className="hidden lg:flex items-center justify-start bg-gradient-to-br from-white via-[#fcfbfa] to-[#f4ecd8] text-gray-900 py-6 pl-28 pr-16 shrink-0 [clip-path:polygon(16%_0%,_100%_0%,_100%_100%,_0%_100%)] -ml-6 mr-0 w-[440px] xl:w-[480px] border-l border-[#c49a43]/40 shadow-2xl relative">
          
          <div className="flex items-center gap-3.5 relative z-10 pl-4">
            {/* Garis pemisah ornamen emas */}
            <div className="w-4 h-[3px] bg-gradient-to-r from-[#c49a43] to-[#083827] rounded-full shadow-sm" />
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#0d2e20] tracking-tight font-serif">
                <span className="hover:text-[#c49a43] transition-colors">Ilmu</span>
                <span className="text-[#c49a43] font-bold">•</span>
                <span className="hover:text-[#c49a43] transition-colors">Adab</span>
                <span className="text-[#c49a43] font-bold">•</span>
                <span className="hover:text-[#c49a43] transition-colors">Amal</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3 h-3 text-[#c49a43] animate-pulse" />
                <span className="text-[11px] sm:text-xs text-[#b88c32] font-extrabold tracking-wider uppercase font-serif">
                  Untuk Kehidupan Nyata
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};