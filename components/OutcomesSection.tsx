import React from 'react';

export const OutcomesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbf9f5] via-[#f4efe6] to-[#ece5d5] overflow-hidden py-20 lg:py-28 border-y border-[#d8cebe]/40">
      
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#c28e38]/10 to-[#073b26]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c28e38]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Layout Utama 3 Kolom yang Seimbang & Rapi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* KOLOM KIRI: Teks Pengantar & Nilai Jual (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Badge Eksklusif */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#c28e38]/30 mb-5 shadow-sm w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#c28e38] to-[#dfad53] animate-pulse"></span>
              <span className="text-[11px] tracking-[0.2em] font-extrabold text-[#073b26] uppercase">
                FILOSOFI PENDIDIKAN ASIH PUTERA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#073b26] tracking-tight leading-[1.15] mb-3">
              Mendidik dengan <br />
              <span className="bg-gradient-to-r from-[#073b26] to-[#125c3d] bg-clip-text text-transparent underline decoration-[#c28e38]/40 decoration-wavy decoration-1">Sepenuh Hati</span>
            </h2>

            <p className="font-serif text-xs sm:text-sm font-bold text-[#b5812e] mb-3 tracking-widest uppercase">
              ✦ Berilmu untuk Peradaban Baru ✦
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Kami merajut pendidikan sebagai proses menumbuhkan fitrah dan potensi anak secara utuh — memadukan kedalaman tauhid, keluhuran adab, ketajaman ilmu, dan kekuatan amal nyata.
            </p>

            {/* Tombol CTA Kelas Atas */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              <a 
                href="#pendaftaran" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#073b26] to-[#0a4d33] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl hover:shadow-2xl hover:from-[#052b1b] hover:to-[#073b26] transition-all duration-300 border border-[#c28e38]/30 overflow-hidden w-fit"
              >
                {/* Efek Kilau Cahaya Berjalan */}
                <span className="absolute top-0 right-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                
                <span>Daftar Sekarang</span>
                <span className="group-hover:translate-x-1.5 transition-transform text-[#dfad53] font-black text-base">→</span>
              </a>
            </div>

            {/* Informasi Pendukung Kepercayaan */}
            <div className="mt-6 pt-5 border-t border-[#d8cebe]/60 flex items-center gap-6">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#073b26]">100%</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider font-medium">Berbasis Karakter</span>
              </div>
              <div className="w-[1px] h-8 bg-[#d8cebe]"></div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#073b26]">Unggul</span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider font-medium">Prestasi & Adab</span>
              </div>
            </div>

          </div>

          {/* KOLOM TENGAH: Gambar Piramida Tanpa Bingkai (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full relative flex flex-col items-center">
              <img 
                src="/images/piramida-filosofi.png" 
                alt="Filosofi Pendidikan Asih Putera - Piramida Konsep" 
                className="w-full h-auto object-contain block mix-blend-multiply scale-100 lg:scale-105 transition-transform duration-500 hover:scale-108"
                loading="lazy" 
              />
            </div>
          </div>

          {/* KOLOM KANAN: Kutipan Filosofis Eksklusif (Span 2) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="relative p-5 sm:p-6 rounded-2xl bg-[#073b26]/[0.03] border border-[#c28e38]/20 shadow-sm backdrop-blur-sm">
              <span className="text-[#c28e38] text-4xl sm:text-5xl font-serif leading-none absolute -top-3 sm:-top-4 left-4 select-none opacity-40">“</span>
              <p className="font-serif italic text-gray-800 text-xs sm:text-sm leading-relaxed mb-4 relative z-10">
                Pendidikan bukan sekadar transfer ilmu, tetapi menyiapkan manusia yang memberi arti bagi peradaban.
              </p>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#c28e38] to-[#dfad53] rounded-full"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};