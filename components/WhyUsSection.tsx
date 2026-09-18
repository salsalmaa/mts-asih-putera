import React from "react";
import {
  User,
  Heart,
  Users2,
  TrendingUp,
  Sparkles
} from "lucide-react";
import {
  IslamicCanvasWatermark,
  MosqueSilhouetteWatermark,
} from "./IslamicElements";

interface WhyUsProps {
  onSelectItem?: (item: any) => void;
}

export const WhyUsSection: React.FC<WhyUsProps> = () => {
  const adolescentPhases = [
    {
      id: 1,
      icon: <User className="w-6 h-6 text-[#d49b28]" strokeWidth={2} />,
      title: "Identitas",
      subtitle: "Siapa saya?"
    },
    {
      id: 2,
      icon: <Heart className="w-6 h-6 text-[#d49b28]" strokeWidth={2} />,
      title: "Prinsip",
      subtitle: "Apa yang benar bagi saya?"
    },
    {
      id: 3,
      icon: <Users2 className="w-6 h-6 text-[#d49b28]" strokeWidth={2} />,
      title: "Pergaulan",
      subtitle: "Dengan siapa saya bertumbuh?"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6 text-[#d49b28]" strokeWidth={2} />,
      title: "Masa Depan",
      subtitle: "Saya ingin menjadi siapa?"
    }
  ];

  return (
    <section
      id="profil"
      className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#f7f5ef] via-[#faf9f5] to-[#f2eee3] relative overflow-hidden"
    >
      {/* Background Watermarks dengan Opabilitas Elegan */}
      <IslamicCanvasWatermark
        opacityClass="opacity-[0.04]"
        colorClass="text-[#0a4b2f]"
      />
      <MosqueSilhouetteWatermark className="opacity-[0.04]" />

      {/* Ambient Glow Ornaments */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#c4933b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a4b2f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main Grid: Kiri & Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* SISI KIRI: Teks */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Label Atas dengan Garis & Badge Kecil */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#0a4b2f]/5 border border-[#0a4b2f]/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#c4933b]" />
              <span className="text-xs font-bold tracking-wider text-[#0a4b2f] uppercase">
                Fase Krusial Remaja
              </span>
            </div>

            {/* Judul Utama */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#06351f] leading-[1.15] tracking-tight mb-5">
              Masa Remaja <span className="text-[#b8862e] font-normal">13–15</span> Tahun
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Usia 13–15 tahun adalah fase krusial ketika anak mulai mencari identitas, membangun pertemanan, menguji batas, dan ingin dipercaya—namun tetap membutuhkan <strong className="text-[#0a4b2f] font-semibold">pendampingan yang bijak dan terarah</strong>.
            </p>
          </div>

          {/* SISI KANAN: 4 Kartu Kubah Berlayer & Garis Bawah Presisi */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Grid 4 Kartu Kubah Premium */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {adolescentPhases.map((phase) => (
                <div
                  key={phase.id}
                  style={{ borderTopLeftRadius: '140px', borderTopRightRadius: '140px' }}
                  className="bg-gradient-to-b from-white via-[#fcfbf7] to-[#f4efe6] border border-[#e8dfcf] rounded-b-2xl pt-9 pb-7 px-3 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(180,135,50,0.12)] hover:border-[#c4933b]/50 transition-all duration-500 group hover:-translate-y-2 relative"
                >
                  {/* Efek Garis Cahaya di Atas Kubah */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#c4933b]/40 to-transparent rounded-full" />

                  {/* Lingkaran Mewah untuk Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_6px_16px_rgba(0,0,0,0.06)] border border-[#f0e6d2] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0a4b2f] group-hover:border-[#0a4b2f] transition-all duration-300">
                    {/* Mengubah warna icon saat di-hover */}
                    <div className="group-hover:text-white transition-colors">
                      {phase.icon}
                    </div>
                  </div>

                  {/* Teks Kartu */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0a4b2f] mb-1 group-hover:text-[#b8862e] transition-colors">
                    {phase.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium leading-snug px-1">
                    {phase.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* Bagian Bawah: Garis Penghubung Mewah & Timeline */}
            <div className="mt-10 relative flex flex-col items-center">
              
              {/* Container Garis dengan Aksen Profesional */}
              <div className="w-full relative flex items-center justify-center pt-3">
                {/* Garis Horizontal Gradient */}
                <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#b8862e] to-transparent opacity-80 rounded-full"></div>
                
                {/* Ornamen Panah Kiri */}
                <div className="absolute left-0 top-3 w-3 h-3 border-l-2 border-t-2 border-[#b8862e] rounded-tl-sm -rotate-45"></div>
                
                {/* Ornamen Panah Kanan */}
                <div className="absolute right-0 top-3 w-3 h-3 border-r-2 border-t-2 border-[#b8862e] rounded-tr-sm rotate-45"></div>

                {/* Badge Tengah dengan Efek Glow */}
                <div className="absolute -top-2 bg-gradient-to-r from-[#0a4b2f] to-[#125c38] text-white text-[11px] font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_15px_rgba(10,75,47,0.3)] border border-[#c4933b]/40">
                  Butuh Pendampingan Intensif
                </div>
              </div>

              {/* List Poin Kata Kunci dengan Styling Bersih */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-[#0a4b2f] mt-5 bg-white/60 backdrop-blur-sm px-6 py-2.5 rounded-full border border-[#e8dfcf] shadow-sm">
                <span className="hover:text-[#b8862e] transition-colors cursor-default">Arah</span>
                <span className="w-1 h-1 rounded-full bg-[#b8862e]" />
                <span className="hover:text-[#b8862e] transition-colors cursor-default">Batas</span>
                <span className="w-1 h-1 rounded-full bg-[#b8862e]" />
                <span className="hover:text-[#b8862e] transition-colors cursor-default">Teladan</span>
                <span className="w-1 h-1 rounded-full bg-[#b8862e]" />
                <span className="hover:text-[#b8862e] transition-colors cursor-default">Pengalaman</span>
                <span className="w-1 h-1 rounded-full bg-[#b8862e]" />
                <span className="hover:text-[#b8862e] transition-colors cursor-default">Refleksi</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};