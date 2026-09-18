import React from "react";
import {
  Sprout,
  Mountain,
  Target,
  FileText,
  Users,
  BookOpen,
  Shield,
  Compass,
  FlaskConical,
  Award,
  Scroll,
  GraduationCap,
  Heart,
  Star,
} from "lucide-react";
import {
  IslamicCanvasWatermark,
} from "./IslamicElements";

export const PillarsSection: React.FC = () => {
  return (
    <section
      id="kurikulum"
      className="relative w-full py-12 sm:py-16 bg-[#faf9f5] text-gray-900 border-y border-gray-200/60 overflow-hidden"
    >
      <IslamicCanvasWatermark
        opacityClass="opacity-[0.03]"
        colorClass="text-[#0a4b2f]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-[#9c7428]">
                LEARN • GROW • LEAD • MAKE AN IMPACT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a4b2f] tracking-tight drop-shadow-sm">
              The Asih Putera Journey
            </h2>
            <p className="text-base sm:text-lg font-serif font-bold text-[#0a4b2f]/90 mt-1">
              Perjalanan 3 Tahun di MTs
            </p>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mt-2 leading-relaxed font-medium">
              Proses bertahap dan terintegrasi untuk membentuk remaja yang mengenal diri, menguatkan prinsip, dan siap melangkah ke masa depan yang lebih besar.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-lg-end">
            <div className="relative pl-5 border-l-4 border-[#e5a93c] max-w-md w-full py-2 bg-[#fcfbf9]/60 rounded-r-xl shadow-sm">
              <span className="text-[#e5a93c] text-4xl font-serif leading-none absolute -top-2 left-1 select-none">“</span>
              <p className="font-serif italic text-gray-800 text-sm sm:text-base leading-relaxed font-semibold">
                Setiap tahap adalah bagian penting dari perjalanan, bukan sekadar jenjang kelas.
              </p>
              <span className="block text-[10px] sm:text-xs tracking-widest text-[#9c7428] uppercase mt-2 font-bold">
                LANGKAH KECIL HARI INI UNTUK MASA DEPAN YANG LEBIH BAIK
              </span>
            </div>
          </div>
        </div>

        {/* Layout Utama: 3 Kolom Panah Alur (Kelas VII, VIII, IX) + 1 Kolom Kapsul Lulusan MTs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 relative z-10 mb-8 items-start">
          
          {/* ================= KELAS VII ================= */}
          <div className="flex flex-col relative pt-7 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0a4b2f] text-white flex flex-col items-center justify-center font-serif font-bold shadow-lg border-4 border-[#faf9f5] z-30">
              <span className="text-[7px] tracking-widest leading-none text-white/80">KELAS</span>
              <span className="text-xs leading-tight">VII</span>
            </div>

            <div 
              className="relative bg-[#eaf1ec] pt-10 pb-5 px-5 text-center shadow-md z-10 shrink-0"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)"
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0a4b2f]/10 text-[#0a4b2f] flex items-center justify-center mx-auto mb-1.5 mt-1">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-[8px] tracking-[0.2em] font-bold text-[#9c7428] uppercase block mb-0.5">
                TAHAP PERJALANAN —
              </span>
              <h3 className="font-serif text-base font-bold text-[#0a4b2f] mb-0.5">
                MENGENAL DIRI
              </h3>
              <p className="text-[11px] font-serif italic text-[#0a4b2f]/80">Siapa saya?</p>
            </div>

            <div className="bg-[#eaf1ec]/50 pb-5 px-5 flex-1 rounded-b-xl border border-[#d2e2d7] shadow-sm flex flex-col -mt-2 pt-5">
              <div className="border-t border-[#d2e2d7] pt-3 mb-3">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-1">
                  FOKUS UTAMA —
                </span>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  Membangun kesadaran diri, kebiasaan baik, dan dasar-dasar penting untuk bertumbuh.
                </p>
              </div>

              <div className="pt-2 border-t border-[#d2e2d7] flex flex-col flex-1">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-2">
                  PROGRAM KUNCI —
                </span>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><FileText className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Proposal Diri</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Mengenali potensi dan tujuan hidup</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Users className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Mentoring</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Pendampingan personal</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><BookOpen className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Literasi & Numerasi</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Menguatkan kemampuan dasar</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Shield className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Pembiasaan Karakter</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Disiplin, adab, dan tanggung jawab</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= KELAS VIII ================= */}
          <div className="flex flex-col relative pt-7 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0a4b2f] text-white flex flex-col items-center justify-center font-serif font-bold shadow-lg border-4 border-[#faf9f5] z-30">
              <span className="text-[7px] tracking-widest leading-none text-white/80">KELAS</span>
              <span className="text-xs leading-tight">VIII</span>
            </div>

            <div 
              className="relative bg-[#f2efe9] pt-10 pb-5 px-5 text-center shadow-md z-10 shrink-0"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)"
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0a4b2f]/10 text-[#0a4b2f] flex items-center justify-center mx-auto mb-1.5 mt-1">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="text-[8px] tracking-[0.2em] font-bold text-[#9c7428] uppercase block mb-0.5">
                TAHAP PERJALANAN —
              </span>
              <h3 className="font-serif text-base font-bold text-[#0a4b2f] mb-0.5">
                MENGUATKAN DIRI
              </h3>
              <p className="text-[11px] font-serif italic text-[#0a4b2f]/80">Bagaimana saya bertumbuh?</p>
            </div>

            <div className="bg-[#f2efe9]/50 pb-5 px-5 flex-1 rounded-b-xl border border-[#e4dfd3] shadow-sm flex flex-col -mt-2 pt-5">
              <div className="border-t border-[#e4dfd3] pt-3 mb-3">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-1">
                  FOKUS UTAMA —
                </span>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  Mengasah kemampuan, memperluas pengalaman, dan belajar dari tantangan nyata.
                </p>
              </div>

              <div className="pt-2 border-t border-[#e4dfd3] flex flex-col flex-1">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-2">
                  PROGRAM KUNCI —
                </span>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Compass className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">City Survival</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Belajar kemandirian di dunia nyata</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><FlaskConical className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Project & Science Experience</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Berpikir kritis & pemecahan masalah</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Shield className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Garda Upstander</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Berani menjaga kebaikan</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Users className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Organisasi & Leadership</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Melatih kepemimpinan & kerja sama</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= KELAS IX ================= */}
          <div className="flex flex-col relative pt-7 h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#c28e38] text-white flex flex-col items-center justify-center font-serif font-bold shadow-lg border-4 border-[#faf9f5] z-30">
              <span className="text-[7px] tracking-widest leading-none text-white/80">KELAS</span>
              <span className="text-xs leading-tight">IX</span>
            </div>

            <div 
              className="relative bg-[#f7f2ea] pt-10 pb-5 px-5 text-center shadow-md z-10 shrink-0"
              style={{
                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)"
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0a4b2f]/10 text-[#0a4b2f] flex items-center justify-center mx-auto mb-1.5 mt-1">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[8px] tracking-[0.2em] font-bold text-[#9c7428] uppercase block mb-0.5">
                TAHAP PERJALANAN —
              </span>
              <h3 className="font-serif text-base font-bold text-[#0a4b2f] mb-0.5">
                MENENTUKAN ARAH
              </h3>
              <p className="text-[11px] font-serif italic text-[#0a4b2f]/80">Ke mana saya akan melangkah?</p>
            </div>

            <div className="bg-[#f7f2ea]/50 pb-5 px-5 flex-1 rounded-b-xl border border-[#ede3d4] shadow-sm flex flex-col -mt-2 pt-5">
              <div className="border-t border-[#ede3d4] pt-3 mb-3">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-1">
                  FOKUS UTAMA —
                </span>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  Matangkan pilihan, menunjukkan karya, dan menyiapkan diri ke jenjang selanjutnya.
                </p>
              </div>

              <div className="pt-2 border-t border-[#ede3d4] flex flex-col flex-1">
                <span className="block text-[8px] tracking-widest font-bold text-[#9c7428] uppercase mb-2">
                  PROGRAM KUNCI —
                </span>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Scroll className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Taklif</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Memikul amanah dan tanggung jawab</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><FileText className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Proposal Diri III</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Refleksi dan rencana masa depan</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><Award className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Expo Talenta</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Menunjukkan karya dan potensi</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><BookOpen className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Riset / Prestasi</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Mengembangkan minat dan capaian</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0a4b2f] bg-[#0a4b2f]/10 p-1.5 rounded-lg mt-0.5 shrink-0"><GraduationCap className="w-4 h-4" /></span>
                    <div>
                      <strong className="block text-gray-900 text-xs font-bold">Transition Experience</strong>
                      <span className="text-gray-700 text-[11px] font-medium leading-tight block mt-0.5">Persiapan studi lanjut ke MA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= LULUSAN MTs (BALANCED COMPACT ARCH) ================= */}
<div className="relative bg-gradient-to-b from-[#0a4b2f] via-[#073824] to-[#042417] text-white rounded-t-[100px] rounded-b-[32px] py-6 px-5 flex flex-col justify-between shadow-[0_15px_35px_rgba(7,56,36,0.25)] border-2 border-[#e5a93c]/70 lg:mt-6 w-full max-w-[280px] mx-auto min-h-[430px] overflow-hidden group">
  
  {/* Aksen Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#e5a93c15_0%,transparent_70%)] pointer-events-none"></div>
  <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#e5a93c]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

  {/* Header: Ikon & Judul Lebih Ringkas */}
  <div className="relative z-10 flex flex-col items-center text-center w-full">
    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-[#e5a93c]/40 flex items-center justify-center mb-2.5 text-[#e5a93c] shadow-inner group-hover:scale-110 transition-transform duration-300">
      <svg 
        className="w-7 h-7 text-[#e5a93c]" 
        viewBox="0 0 100 80" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3.5"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M10 68 L38 36 L52 50 L68 28 L90 68 Z" />
        <path d="M68 28 L68 10 L86 15 L68 22" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </div>

    <div className="space-y-0.5">
      <h3 className="font-serif text-base sm:text-lg font-extrabold text-white tracking-widest leading-tight drop-shadow-md">
        LULUSAN MTs
      </h3>
      <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#e5a93c] to-transparent mx-auto mt-1.5 rounded-full"></div>
    </div>
  </div>

  {/* Daftar Karakter: Grid 2 Kolom agar Tinggi Card Menyusut dan Seimbang */}
  <div className="relative z-10 w-full grid grid-cols-2 gap-2 my-2">
    {[
      "Beriman", 
      "Beradab", 
      "Berilmu", 
      "Mandiri", 
      "Tangguh", 
      "Berkarya", 
      "Bermanfaat"
    ].map((item, index) => (
      <div 
        key={index}
        className={`bg-white/[0.04] hover:bg-[#e5a93c]/20 border border-white/10 hover:border-[#e5a93c]/65 rounded-xl py-2 px-2 text-center transition-all duration-300 shadow-2xs group/item cursor-default ${
          index === 6 ? 'col-span-2 py-1.5' : '' // Item terakhir ("Bermanfaat") melebar di bawah secara simetris
        }`}
      >
        <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-white group-hover/item:text-[#f4d06f] transition-colors drop-shadow">
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* Footer Kecil / Tagline */}
  <div className="relative z-10 text-center pt-2 border-t border-white/10 w-full">
    <span className="text-[9px] text-[#e5a93c]/90 font-serif italic tracking-wider uppercase">
      Profil Pelajar Asih Putera
    </span>
  </div>

</div>

        </div>

        {/* Kotak Bawah: Nilai yang Menemani Setiap Langkah */}
        <div className="grid grid-cols-1 gap-4 items-stretch mt-6">
          <div className="bg-[#f4f3ee] text-gray-900 rounded-full py-2.5 px-3 sm:px-4 flex flex-col lg:flex-row items-center justify-between shadow-lg border border-[#e5a93c]/40">
            
            {/* Sisi Kiri: Banner Hijau Tua Bentuk Panah Miring */}
            <div 
              className="bg-[#073824] text-white py-4 px-6 sm:px-8 mb-3 lg:mb-0 text-left shrink-0 shadow-md w-full lg:w-auto flex flex-col justify-center"
              style={{
                clipPath: "polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)",
                borderRadius: "9999px 0 0 9999px",
                minHeight: "75px"
              }}
            >
              <span className="text-[10px] sm:text-[11px] tracking-[0.15em] font-bold text-[#e5a93c] uppercase block leading-tight">
                5 NILAI<br />UNTUK MEMBENTUK REMAJA UTUH
              </span>
              <div className="w-6 h-[2px] bg-[#e5a93c] mt-1.5"></div>
            </div>

            {/* Sisi Kanan: Daftar 5 Item Nilai */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full items-center px-2 py-1">
              
              {/* Cageur */}
              <div className="flex items-center gap-2.5 relative lg:border-r lg:border-[#d4cebc] lg:pr-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#f9f8f6] text-[#073824] flex items-center justify-center shrink-0 shadow-xs border border-[#c28e38]/30">
                  <Heart className="w-6 h-6 text-[#073824]" strokeWidth={2.2} />
                </div>
                <div>
                  <strong className="font-serif text-[11px] sm:text-xs font-bold text-gray-900 block leading-tight">Cageur</strong>
                  <span className="text-[10px] sm:text-[11px] text-gray-700 font-medium block leading-tight mt-0.5">Sehat jasmani & rohani</span>
                </div>
              </div>

              {/* Bageur */}
              <div className="flex items-center gap-2.5 relative lg:border-r lg:border-[#d4cebc] lg:pr-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#f9f8f6] text-[#073824] flex items-center justify-center shrink-0 shadow-xs border border-[#c28e38]/30">
                  <Users className="w-6 h-6 text-[#073824]" strokeWidth={2.2} />
                </div>
                <div>
                  <strong className="font-serif text-[11px] sm:text-xs font-bold text-gray-900 block leading-tight">Bageur</strong>
                  <span className="text-[10px] sm:text-[11px] text-gray-700 font-medium block leading-tight mt-0.5">Berakhlak & empatik</span>
                </div>
              </div>

              {/* Bener */}
              <div className="flex items-center gap-2.5 relative lg:border-r lg:border-[#d4cebc] lg:pr-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#f9f8f6] text-[#073824] flex items-center justify-center shrink-0 shadow-xs border border-[#c28e38]/30">
                  <Shield className="w-6 h-6 text-[#073824]" strokeWidth={2.2} />
                </div>
                <div>
                  <strong className="font-serif text-[11px] sm:text-xs font-bold text-gray-900 block leading-tight">Bener</strong>
                  <span className="text-[10px] sm:text-[11px] text-gray-700 font-medium block leading-tight mt-0.5">Jujur & bertanggung jawab</span>
                </div>
              </div>

              {/* Pinter */}
              <div className="flex items-center gap-2.5 relative lg:border-r lg:border-[#d4cebc] lg:pr-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#f9f8f6] text-[#073824] flex items-center justify-center shrink-0 shadow-xs border border-[#c28e38]/30">
                  <BookOpen className="w-6 h-6 text-[#073824]" strokeWidth={2.2} />
                </div>
                <div>
                  <strong className="font-serif text-[11px] sm:text-xs font-bold text-gray-900 block leading-tight">Pinter</strong>
                  <span className="text-[10px] sm:text-[11px] text-gray-700 font-medium block leading-tight mt-0.5">Cerdas, kritis, kreatif</span>
                </div>
              </div>

              {/* Singer */}
              <div className="flex items-center gap-2.5 relative col-span-2 sm:col-span-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#f9f8f6] text-[#073824] flex items-center justify-center shrink-0 shadow-xs border border-[#c28e38]/30">
                  <Star className="w-6 h-6 text-[#073824] fill-[#073824]" strokeWidth={2.2} />
                </div>
                <div>
                  <strong className="font-serif text-[11px] sm:text-xs font-bold text-gray-900 block leading-tight">Singer</strong>
                  <span className="text-[10px] sm:text-[11px] text-gray-700 font-medium block leading-tight mt-0.5">Tangguh & berinisiatif</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};