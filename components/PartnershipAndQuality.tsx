import React from "react";
import {
  BookOpen,
  Microscope,
  MessageSquare,
  Code,
  Users,
  FileText,
  Search,
  UserCheck,
  TrendingUp,
  Heart,
  Shield,
  Star,
  Dumbbell,
  Globe,
  Home,
  Settings,
  ArrowRight,
  GraduationCap,
  Trophy,
  Building2,
  Smile,
  Palette,
  Compass,
} from "lucide-react";
import { IslamicCanvasWatermark } from "./IslamicElements";

// ==============================
// IMAGE ASSETS
// ==============================
const imgLiteracy = "/images/mts_literacy_numeracy.jpg";
const imgScience = "/images/mts_science_research.jpg";
const imgLanguage = "/images/mts_language.jpg";
const imgTech = "/images/mts_tech_digital.jpg";
const imgLeadership = "/images/mts_leadership_comm.jpg";
const imgPrestasiStudents = "/images/mts_prestasi_students.jpg";

export const PartnershipAndQuality: React.FC = () => {
  const futureSkills = [
    {
      title: "Literacy & Numeracy",
      category: "AKADEMIK",
      description: "Fondasi kuat kemampuan baca kritis dan logika matematika.",
      icon: BookOpen,
      image: imgLiteracy,
      tone: "green",
    },
    {
      title: "Science & Research",
      category: "AKADEMIK",
      description: "Mengembangkan rasa ingin tahu lewat eksperimen ilmiah praktis.",
      icon: Microscope,
      image: imgScience,
      tone: "green",
    },
    {
      title: "Language",
      category: "AKADEMIK",
      description: "Mengasah kemampuan komunikasi multilingual lisan dan tulisan.",
      icon: MessageSquare,
      image: imgLanguage,
      tone: "gold",
    },
    {
      title: "Technology & Digital Literacy",
      category: "AKADEMIK",
      description: "Penguasaan perangkat digital modern dan dasar pemrograman.",
      icon: Code,
      image: imgTech,
      tone: "green",
    },
    {
      title: "Leadership & Communication",
      category: "AKADEMIK",
      description: "Melatih jiwa kepemimpinan, kerja tim, dan public speaking.",
      icon: Users,
      image: imgLeadership,
      tone: "gold",
    },
  ];

  const sinseraSteps = [
    {
      number: "01",
      title: "PLAN",
      desc: "Rencana program, kurikulum, dan target pengembangan",
      icon: FileText,
      bg: "bg-[#cfe2d4]",
      text: "text-[#084c3b]",
      border: "border-[#95bfa3]",
    },
    {
      number: "02",
      title: "TEACH",
      desc: "Pelaksanaan pembelajaran yang bermakna",
      icon: BookOpen,
      bg: "bg-[#b8d4c2]",
      text: "text-[#084c3b]",
      border: "border-[#7fae90]",
    },
    {
      number: "03",
      title: "OBSERVE",
      desc: "Observasi, monitoring, dan pengumpulan data",
      icon: Search,
      bg: "bg-[#9bc2a9]",
      text: "text-[#06382b]",
      border: "border-[#679f7a]",
    },
    {
      number: "04",
      title: "FEEDBACK",
      desc: "Umpan balik dari siswa, guru, dan orang tua",
      icon: MessageSquare,
      bg: "bg-[#0a4b2f]",
      text: "text-white",
      border: "border-[#06321f]",
    },
    {
      number: "05",
      title: "COACH",
      desc: "Pendampingan, pembinaan, dan tindak lanjut",
      icon: UserCheck,
      bg: "bg-[#073824]",
      text: "text-white",
      border: "border-[#042417]",
    },
    {
      number: "06",
      title: "IMPROVE",
      desc: "Evaluasi dan perbaikan berkelanjutan berdasarkan data",
      icon: TrendingUp,
      bg: "bg-[#e3cb98]",
      text: "text-[#59420b]",
      border: "border-[#c49a43]",
    },
  ];

  const achievementStats = [
    {
      number: "125+",
      label: "Prestasi Akademik & Non-Akademik",
      icon: Trophy,
    },
    {
      number: "92%",
      label: "Lulusan Melanjutkan ke Pilihan Sekolah",
      icon: GraduationCap,
    },
    {
      number: "48+",
      label: "Program Pengembangan Diri",
      icon: Compass,
    },
    {
      number: "76%",
      label: "Siswa Mengikuti Pengembangan Talenta",
      icon: Star,
    },
  ];

  const achievementCategories = [
    { title: "Akademik", icon: BookOpen },
    { title: "Riset", icon: Microscope },
    { title: "Olahraga", icon: Dumbbell },
    { title: "Seni", icon: Palette },
    { title: "Bahasa", icon: MessageSquare },
    { title: "Keagamaan", icon: UserCheck },
    { title: "Leadership", icon: Users },
  ];

  return (
    <section
      id="prestasi"
      className="
        relative w-full overflow-hidden
        bg-[#faf9f5]
        text-gray-950
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* SUBTLE BACKGROUND DECORATION */}
      <IslamicCanvasWatermark
        opacityClass="opacity-[0.025]"
        colorClass="text-[#0a4b2f]"
      />

      <div className="absolute -left-32 top-[15%] w-72 h-72 rounded-full bg-[#dce9df]/50 blur-[2px]" />
      <div className="absolute -right-32 bottom-[20%] w-80 h-80 rounded-full bg-[#e8ecd9]/60" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =========================================================================
    BAGIAN 1: FUTURE SKILLS MOSAIC
    ========================================================================= */}

        <div className="mb-12">
          {/* Header Bagian Atas - Menggunakan Elemen Visual Pill Badge */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8 lg:mb-10">
            <div className="lg:col-span-8">
              {/* Badge Visual Eksklusif di Atas Judul */}

              <div className="flex items-center gap-2 mb-3.5 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#084c3b]/5 border border-[#084c3b]/10 text-[#084c3b] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39a45] animate-pulse" />
                  AKADEMIK &amp; KREATIVITAS
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#c39a45]/20 text-[#718888] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-2xs">
                  KARAKTER &amp; MASA DEPAN
                </div>
              </div>

              {/* Judul Utama dengan Tipografi Tegak, Bold, & Gradien Berdimensi */}

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.08] font-bold tracking-tight text-[#084c3b]">
                Belajar Tidak Hanya <br />
                <span className="not-italic font-bold bg-gradient-to-r from-[#c39a45] via-[#dfb65b] to-[#a2782e] bg-clip-text text-transparent tracking-wide drop-shadow-xs">
                  Di Kelas
                </span>
              </h2>

              {/* Subjudul dengan Gaya Berkelas */}

              <div className="mt-4 flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-md bg-[#c39a45]/10 border border-[#c39a45]/30 shadow-2xs">
                  <p className="font-serif text-sm sm:text-base text-[#155544] font-semibold italic tracking-wide">
                    Academic Excellence{" "}
                    <span className="text-[#c39a45] not-italic font-sans font-bold mx-1">
                      ×
                    </span>{" "}
                    Future Skills
                  </p>
                </div>

                <div className="hidden sm:block flex-1 max-w-[140px] h-[1.5px] bg-gradient-to-r from-[#c49a43]/60 to-transparent" />
              </div>
            </div>

            {/* Kutipan Kanan dengan Tata Letak Card Modern & Elegan */}

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="relative p-4 sm:p-5 bg-gradient-to-br from-white via-[#faf6ee] to-[#f4ecd8]/60 rounded-2xl border border-[#c49a43]/30 shadow-md w-full lg:w-auto">
                <span className="absolute -top-3 left-4 font-serif text-3xl text-[#c49a43]/40 select-none bg-[#faf6ee] px-2">
                  “
                </span>

                <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#718888] space-y-2 pt-0.5">
                  <div className="flex items-center gap-2.5 group">
                    <span className="w-2 h-2 rounded-full bg-[#c49a43] shadow-xs group-hover:scale-125 transition-transform" />
                    <span className="text-[#084c3b]">
                      Ilmu &amp; Pengalaman
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 group">
                    <span className="w-2 h-2 rounded-full bg-[#c49a43] shadow-xs group-hover:scale-125 transition-transform" />
                    <span className="text-[#084c3b]">
                      Karya &amp; Masa Depan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Slanted Cards Layout (h-[450px]) */}

          <div className="hidden lg:grid grid-cols-5 gap-4 w-full h-[450px]">
            {futureSkills.map((item, index) => {
              const Icon = item.icon;

              const colorThemes = [
                {
                  bgCircle: "bg-[#d9777f]",
                  textCircle: "text-white",
                  line: "bg-[#d9777f]",
                },
                {
                  bgCircle: "bg-[#659bc2]",
                  textCircle: "text-white",
                  line: "bg-[#659bc2]",
                },
                {
                  bgCircle: "bg-[#e8b85b]",
                  textCircle: "text-white",
                  line: "bg-[#e8b85b]",
                },
                {
                  bgCircle: "bg-[#729e84]",
                  textCircle: "text-white",
                  line: "bg-[#729e84]",
                },
                {
                  bgCircle: "bg-[#9a82b8]",
                  textCircle: "text-white",
                  line: "bg-[#9a82b8]",
                },
              ];

              const theme = colorThemes[index % colorThemes.length];

              return (
                <div
                  key={item.title}
                  className="group relative h-full rounded-[24px] overflow-hidden shadow-md bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                  style={{
                    transform: "skewX(-4deg)",
                  }}
                >
                  <div className="relative w-full h-[63%] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ transform: "skewX(4deg) scale(1.1)" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div
                    className="relative flex-1 bg-white px-5 pt-7 pb-4 flex flex-col justify-between"
                    style={{ transform: "skewX(4deg)" }}
                  >
                    <div
                      className={`absolute -top-6 left-5 w-12 h-12 rounded-full ${theme.bgCircle} ${theme.textCircle} shadow-md flex items-center justify-center border-4 border-white transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div>
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#718888] block mb-0.5">
                        {item.category || "AKADEMIK"}
                      </span>

                      <h3 className="font-serif text-[15px] font-bold leading-snug text-[#084c3b]">
                        {item.title}
                      </h3>

                      <div className={`mt-2 w-7 h-[2px] ${theme.line}`} />
                    </div>

                    {item.description && (
                      <p className="text-xs font-medium text-gray-900 leading-relaxed mt-1.5 tracking-wide">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Grid Responsive */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            {futureSkills.map((item, index) => {
              const Icon = item.icon;

              const colorThemes = [
                { bgCircle: "bg-[#d9777f]", line: "bg-[#d9777f]" },
                { bgCircle: "bg-[#659bc2]", line: "bg-[#659bc2]" },
                { bgCircle: "bg-[#e8b85b]", line: "bg-[#e8b85b]" },
                { bgCircle: "bg-[#729e84]", line: "bg-[#729e84]" },
                { bgCircle: "bg-[#9a82b8]", line: "bg-[#9a82b8]" },
              ];

              const theme = colorThemes[index % colorThemes.length];

              return (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col pt-5"
                >
                  <div className="relative h-[170px] overflow-hidden mx-4 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 relative">
                    <div
                      className={`absolute -top-6 left-5 w-11 h-11 rounded-full ${theme.bgCircle} text-white shadow-md flex items-center justify-center border-4 border-white`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#718888] block mb-1">
                      {item.category || "AKADEMIK"}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-[#084c3b] mb-1">
                      {item.title}
                    </h3>

                    <div className={`mb-2.5 w-7 h-[2px] ${theme.line}`} />

                    {item.description && (
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PEMBATAS SECTION */}
        <div className="relative my-16">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-[#c49a43]/40" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#faf9f5] px-6 text-xs font-bold tracking-[0.3em] uppercase text-[#c49a43] border border-[#c49a43]/30 py-2 rounded-full shadow-sm">
              SISTEM PENJAGA MUTU
            </span>
          </div>
        </div>

        {/* =========================================================================
    BAGIAN 2: SINSERA QUALITY LOOP & KANAN (ULTRA VISUAL & PREMIUM)
    ========================================================================= */}
        <div className="mb-24 relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Latar Belakang Dekoratif Ambient Glow yang Lebih Lembut (Netral & Emas) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#c49a43]/10 via-[#084c3b]/5 to-[#fdfbf7] rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Header Bagian Atas dengan Pill Badge Elegan */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#c49a43]/30 pb-5 mb-12 gap-4">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#084c3b] text-xs font-bold tracking-[0.2em] uppercase shadow-md border border-[#c49a43]/40">
              <span className="w-2 h-2 rounded-full bg-[#c49a43] animate-ping" />
              PLAN &bull; DO &bull; REVIEW &bull; IMPROVE &bull; FOR A BETTER
              TOMORROW
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#084c3b] to-[#053227] text-white text-xs font-extrabold tracking-[0.15em] uppercase shadow-lg border border-[#c49a43]/30">
              <span className="text-[#c49a43]">✦</span> KOMITMEN HARI INI UNTUK
              GENERASI YANG LEBIH BAIK
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title & Narrative */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#084c3b] bg-gradient-to-r from-[#f4ecd8] to-[#e2ede6] mb-3 px-3.5 py-1.5 rounded-lg shadow-sm border border-[#c49a43]/40">
                  SINSERA QUALITY SYSTEM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.08] text-[#084c3b] mb-3 drop-shadow-sm">
                  SINSERA <br />
                  <span className="italic font-normal text-[#c49a43] underline decoration-[#c49a43]/30 decoration-wavy underline-offset-8">
                    Quality Loop
                  </span>
                </h2>
                <p className="text-sm font-serif text-[#155544] font-semibold mb-2">
                  Sistem Penjaga Mutu Pendidikan
                </p>

                {/* TAMBAHAN SARAN: Satu kalimat super sederhana untuk pengunjung baru */}
                <p className="text-[11.5kpx] sm:text-xs font-sans font-medium text-[#084c3b]/90 bg-[#f4ecd8]/60 border-l-2 border-[#c49a43] px-3 py-2 rounded-r-lg mb-3 leading-relaxed shadow-2xs">
                  SINSERA adalah siklus evaluasi dan pengembangan mutu
                  pendidikan yang dilakukan secara berkelanjutan.
                </p>

                <div className="w-16 h-[4px] bg-gradient-to-r from-[#c49a43] via-[#084c3b] to-transparent rounded-full mb-4 shadow-sm" />

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 font-serif bg-white/80 p-4 rounded-2xl border border-[#c49a43]/20 shadow-sm backdrop-blur-sm">
                  Siklus berkelanjutan untuk memastikan setiap siswa mengalami
                  pendidikan yang berkualitas, terukur, dan terus berkembang.
                </p>

                {/* Testimonial Quote Box yang Dipercantik dengan Aksen Emas & Latar Terang */}
                <div className="p-4.5 rounded-2xl bg-gradient-to-br from-white via-[#fcfbfa] to-[#f4ecd8] text-[#084c3b] shadow-lg relative overflow-hidden border border-[#c49a43]/40">
                  <div className="absolute -right-1 -bottom-2 text-[#c49a43]/10 font-serif text-6xl select-none pointer-events-none">
                    “
                  </div>
                  <span className="text-[#c49a43] font-serif text-2xl font-bold leading-none block mb-1">
                    “
                  </span>
                  <p className="font-serif italic text-xs text-gray-800 leading-relaxed relative z-10">
                    Perkembangan siswa dilihat secara utuh, bukan hanya melalui
                    nilai akademik semata.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column: Circular Loop Graphic dari Gambar Statis */}
            <div className="lg:col-span-5 flex justify-center py-10">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <img
                  src="/images/sinsera-diagram.png"
                  alt="Sinsera Quality Loop Diagram"
                  className="w-full h-auto object-contain block mix-blend-multiply drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Area Pengembangan Siswa & Kolaborasi */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Card 1: Area Pengembangan Siswa */}
              <div className="bg-white/95 backdrop-blur-xl rounded-[28px] p-5 sm:p-6 border-2 border-[#c49a43]/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c49a43]/10 to-[#084c3b]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-1 relative z-10">
                  <h3 className="font-serif text-sm sm:text-[15px] font-extrabold text-[#084c3b] tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c49a43]" />
                    AREA PENGEMBANGAN SISWA
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-[#f4ecd8] text-[#084c3b] text-[9px] font-extrabold shadow-sm border border-[#c49a43]/40">
                    360° Profile
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 mb-4 leading-relaxed font-serif italic relative z-10">
                  Pemantauan menyeluruh aspek pertumbuhan anak
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 relative z-10">
                  <div className="absolute left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-[#c49a43]/30 to-transparent -translate-x-1/2 hidden sm:block" />

                  {/* Kiri */}
                  <div className="space-y-3 pr-1">
                    {[
                      {
                        icon: BookOpen,
                        title: "Akademik",
                        desc: "Hasil & kompetensi",
                      },
                      {
                        icon: Heart,
                        title: "Karakter",
                        desc: "Sikap, adab & nilai",
                      },
                      { icon: Home, title: "Ibadah", desc: "Kebiasaan agama" },
                      {
                        icon: Dumbbell,
                        title: "Kesehatan",
                        desc: "Fisik & mental",
                      },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 group bg-[#fdfbf7] p-2 rounded-xl border border-[#c49a43]/20 hover:border-[#c49a43]/60 transition-all shadow-xs"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#084c3b] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                            <Icon className="w-3.5 h-3.5 text-[#f1e5c6]" />
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-gray-900 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[9px] text-gray-500 leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Kanan */}
                  <div className="space-y-3 pl-1">
                    {[
                      { icon: Star, title: "Talenta", desc: "Minat & bakat" },
                      { icon: Users, title: "Sosial", desc: "Kepedulian" },
                      {
                        icon: FileText,
                        title: "Kedisiplinan",
                        desc: "Tanggung jawab",
                      },
                      {
                        icon: Globe,
                        title: "Life Skill",
                        desc: "Kesiapan masa depan",
                      },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 group bg-[#fdfbf7] p-2 rounded-xl border border-[#c49a43]/20 hover:border-[#c49a43]/60 transition-all shadow-xs"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#084c3b] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                            <Icon className="w-3.5 h-3.5 text-[#f1e5c6]" />
                          </div>
                          <div>
                            <h4 className="text-[11px] font-bold text-gray-900 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[9px] text-gray-500 leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card 2: Kolaborasi Pihak Terkait */}
              <div className="bg-gradient-to-br from-[#fdfbf7] via-[#f4ecd8] to-[#e6d8bc] backdrop-blur-md rounded-[28px] p-5 sm:p-6 border-2 border-[#c49a43]/50 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#c49a43]/20 rounded-full blur-xl pointer-events-none" />

                <h3 className="font-serif text-sm sm:text-[15px] font-extrabold text-[#084c3b] tracking-wide mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#084c3b]" />
                  KOLABORASI PIHAK TERKAIT
                </h3>
                <p className="text-[11px] text-gray-700 mb-4 leading-relaxed font-serif italic">
                  Pendidikan berkualitas lahir dari sinergi bersama
                </p>

                <div className="grid grid-cols-5 gap-2 text-center pt-1">
                  {[
                    {
                      icon: GraduationCap,
                      title: "Siswa",
                      desc: "Subjek utama",
                    },
                    { icon: Users, title: "Guru", desc: "Pembimbing" },
                    { icon: Home, title: "Orang Tua", desc: "Mitra sejati" },
                    {
                      icon: Shield,
                      title: "Pimpinan",
                      desc: "Arah & keputusan",
                    },
                    { icon: Settings, title: "Sistem", desc: "Teknologi" },
                  ].map((col, i) => {
                    const ColIcon = col.icon;
                    return (
                      <div key={i} className="flex flex-col items-center group">
                        <div className="w-11 h-11 rounded-2xl bg-white border border-[#c49a43]/50 flex items-center justify-center text-[#084c3b] mb-1.5 shadow-md group-hover:bg-[#084c3b] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                          <ColIcon className="w-5 h-5 text-[#c49a43] group-hover:text-[#f1e5c6]" />
                        </div>
                        <h4 className="text-[10px] font-extrabold text-gray-900 leading-tight">
                          {col.title}
                        </h4>
                        <p className="text-[8px] text-gray-600 leading-tight mt-0.5">
                          {col.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
      SINSERA BOTTOM BANNER (Ikon & Teks Diperbesar)
      ========================================================================= */}
          <div className="mt-16 w-full bg-[#fdfbf7] rounded-full overflow-hidden shadow-2xl border-2 border-[#c49a43]/50 flex flex-col xl:flex-row items-stretch">
            {/* 1. Sisi Kiri: Hijau Tua Padat dengan Bentuk Chevron Tajam */}
            <div className="xl:w-[32%] bg-[#084c3b] text-white px-6 sm:px-8 py-5 flex items-center gap-4 relative [clip-path:polygon(0_0,calc(100%_-_35px)_0,100%_50%,calc(100%_-_35px)_100%,0_100%)] xl:[clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_50%,calc(100%_-_40px)_100%,0_100%)] pr-12">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#c49a43]/40 flex items-center justify-center shrink-0 shadow-md text-[#f1e5c6]">
                <TrendingUp className="w-6 h-6 text-[#c49a43]" />
              </div>
              <div>
                <h5 className="font-serif text-sm sm:text-base font-extrabold tracking-wider text-white uppercase mb-1">
                  HASIL YANG DICAPAI
                </h5>
                <p className="text-[10.5px] sm:text-[11px] text-[#e9f2ec] leading-relaxed font-serif opacity-95">
                  Pembelajaran yang lebih bermakna, perkembangan yang terlihat,
                  dan generasi yang siap masa depan.
                </p>
              </div>
            </div>

            {/* 2. Bagian Tengah: 5 Pilar Target (Ikon Diperbesar & Teks Dinaikkan Ukurannya) */}
            <div className="xl:w-[48%] px-6 py-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-4 bg-[#fdfbf7]">
              {[
                { icon: Trophy, title: "Siswa", desc: "berkembang optimal" },
                { icon: Users, title: "Guru", desc: "tumbuh dan berdaya" },
                { icon: Shield, title: "Sekolah", desc: "semakin berkualitas" },
                { icon: Users, title: "Orang tua", desc: "makin terlibat" },
                {
                  icon: Globe,
                  title: "Lingkungan",
                  desc: "memberi dampak positif",
                },
              ].map((pilar, i, arr) => {
                const PilarIcon = pilar.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center w-full sm:w-auto flex-1"
                  >
                    <div className="flex flex-col items-center text-center group w-full px-1.5">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#c49a43]/30 flex items-center justify-center mb-1.5 shadow-2xs group-hover:bg-[#084c3b] group-hover:text-white transition-all text-[#084c3b]">
                        <PilarIcon className="w-5 h-5 text-[#c49a43] group-hover:text-[#f1e5c6]" />
                      </div>
                      <span className="text-[11.5px] font-extrabold text-gray-900 tracking-wide leading-tight">
                        {pilar.title}
                      </span>
                      <span className="text-[9px] text-gray-600 leading-tight mt-0.5">
                        {pilar.desc}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden sm:block w-[1px] h-12 bg-[#c49a43]/30 shrink-0 mx-1" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* 3. Sisi Kanan: Gradien Emas dengan Efek Panah Masuk di Kiri */}
            <div className="xl:w-[20%] bg-gradient-to-r from-[#c49a43] to-[#99732b] text-white px-6 py-5 flex items-center justify-between gap-3 relative [clip-path:polygon(30px_0,100%_0,100%_100%,30px_100%,0_50%)] xl:[clip-path:polygon(35px_0,100%_0,100%_100%,35px_100%,0_50%)] pl-10 cursor-pointer group">
              <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0 bg-white/15 shadow-sm group-hover:scale-110 group-hover:bg-white group-hover:text-[#084c3b] transition-all text-white">
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#084c3b]" />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[9.5px] font-black uppercase tracking-[0.12em] text-white">
                  BERSAMA,
                </span>
                <span className="text-[9.5px] font-extrabold uppercase tracking-[0.05em] text-[#fdfbf7]">
                  KITA TERUS MELANGKAH
                </span>
                <span className="text-[8px] font-medium text-[#f4ecd8] mt-0.5 tracking-tight">
                  UNTUK PENDIDIKAN YANG LEBIH BAIK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
    BAGIAN 3: PRESTASI & CAPAIAN
    ========================================================================= */}
        <div className="relative pt-16 lg:pt-24 pb-8 overflow-hidden bg-[#fcfbf9]">
          {/* ================================================================
      DECORATIVE BACKGROUND
      ================================================================ */}

          {/* Soft organic glow di kanan */}
          <div
            className="
      absolute
      top-[-120px]
      right-[-120px]
      w-[420px]
      h-[420px]
      rounded-full
      bg-[#dce9df]/40
      blur-3xl
      pointer-events-none
    "
          />

          {/* Soft organic glow di kiri bawah */}
          <div
            className="
      absolute
      bottom-[80px]
      left-[-180px]
      w-[380px]
      h-[380px]
      rounded-full
      bg-[#e9dfc9]/20
      blur-3xl
      pointer-events-none
    "
          />

          {/* ================================================================
      HEADER + FOTO SISWA
      ================================================================ */}
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="relative min-h-0 lg:min-h-[360px]">
              {/* ------------------------------------------------------------
          FOTO SISWA — DESKTOP
          ------------------------------------------------------------ */}
              <div
                className="
          absolute
          hidden lg:block
          z-0
          top-[-30px]
          right-[-7%]
          w-[62%]
          h-[510px]
          pointer-events-none
        "
              >
                {/* Glow di belakang foto */}
                <div
                  className="
            absolute
            top-[20px]
            right-[8%]
            w-[430px]
            h-[430px]
            rounded-full
            bg-[#dce9df]/70
            blur-3xl
          "
                />

                {/* Foto utama */}
                <div
                  className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-tl-[55px]
            rounded-tr-[55px]
            rounded-bl-[45%]
            rounded-br-[15%]
          "
                >
                  <img
                    src="/images/prestasi-students.jpg"
                    alt="Siswa Berprestasi"
                    referrerPolicy="no-referrer"
                    className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              scale-[1.02]
            "
                  />

                  {/* --------------------------------------------------------
              FADE KIRI
              Membuat foto menyatu dengan area teks
              -------------------------------------------------------- */}
                  <div
                    className="
              absolute
              inset-y-0
              left-0
              w-[50%]
              bg-gradient-to-r
              from-[#fcfbf9]
              via-[#fcfbf9]/75
              to-transparent
            "
                  />

                  {/* --------------------------------------------------------
              FADE ATAS
              -------------------------------------------------------- */}
                  <div
                    className="
              absolute
              inset-x-0
              top-0
              h-[110px]
              bg-gradient-to-b
              from-[#fcfbf9]/25
              to-transparent
            "
                  />

                  {/* --------------------------------------------------------
              FADE BAWAH
              -------------------------------------------------------- */}
                  <div
                    className="
              absolute
              inset-x-0
              bottom-0
              h-[180px]
              bg-gradient-to-t
              from-[#fcfbf9]
              via-[#fcfbf9]/70
              to-transparent
            "
                  />
                </div>

                {/* ==========================================================
            ORGANIC WAVE
            Membuat batas bawah foto tidak berbentuk kotak
            ========================================================== */}
                <svg
                  className="
            absolute
            bottom-[-2px]
            left-[-4%]
            w-[108%]
            h-[135px]
            z-20
          "
                  viewBox="0 0 1000 160"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="
              M0,105
              C120,62 225,125 350,108
              C475,90 575,42 700,72
              C820,102 905,108 1000,62
              L1000,160
              L0,160
              Z
            "
                    fill="#fcfbf9"
                  />
                </svg>
              </div>

              {/* ------------------------------------------------------------
          DEKORASI KECIL
          ------------------------------------------------------------ */}
              <div
                className="
          hidden lg:block
          absolute
          top-[35px]
          right-[41%]
          w-[70px]
          h-[70px]
          rounded-full
          border
          border-[#c49a43]/20
          z-10
        "
              />

              <div
                className="
          hidden lg:block
          absolute
          top-[62px]
          right-[42%]
          w-2
          h-2
          rounded-full
          bg-[#c49a43]/60
          z-10
        "
              />

              {/* ==============================================================
    HEADER TEXT
    ============================================================== */}
              <div className="relative z-20 lg:w-[58%] pt-2 lg:pt-8">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c49a43]">
                    — APA HASILNYA?
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="
            font-serif
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[52px]
            font-bold
            leading-[1.08]
            text-[#084c3b]
          "
                >
                  Prestasi &amp; Capaian
                </h2>

                {/* Description */}
                <p
                  className="
            mt-5
            font-serif
            text-sm
            sm:text-base
            text-gray-700
            leading-relaxed
            max-w-xl
          "
                >
                  Berbagai prestasi dan capaian yang diraih oleh siswa-siswi
                  kami, menjadi bukti nyata dari proses belajar, pembinaan
                  karakter, dan pengembangan potensi yang berkelanjutan.
                </p>

                {/* TAMBAHAN POIN PADAT AGAR TIDAK KOSONG */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                  <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-[#084c3b]/10">
                    <div className="w-2 h-2 rounded-full bg-[#c49a43]" />
                    <span className="font-serif text-xs font-medium text-[#084c3b]">
                      Konsisten Juara Tingkat Nasional
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-[#084c3b]/10">
                    <div className="w-2 h-2 rounded-full bg-[#c49a43]" />
                    <span className="font-serif text-xs font-medium text-[#084c3b]">
                      Standar Pembinaan Unggulan
                    </span>
                  </div>
                </div>
              </div>

              {/* ==============================================================
          FOTO MOBILE
          Supaya di HP foto tidak hilang
          ============================================================== */}
              <div
                className="
          lg:hidden
          relative
          mt-8
          w-full
          h-[280px]
          overflow-hidden
          rounded-t-[35px]
          rounded-b-[45%]
        "
              >
                <img
                  src="/images/prestasi-students.jpg"
                  alt="Siswa Berprestasi"
                  referrerPolicy="no-referrer"
                  className="
            w-full
            h-full
            object-cover
            object-center
          "
                />

                {/* Fade bawah */}
                <div
                  className="
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-[#fcfbf9]
            to-transparent
          "
                />
              </div>
            </div>

            {/* ================================================================
        STATISTIK PRESTASI
        ================================================================ */}
            <div
              className="
        relative
        z-30
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
        lg:gap-5
        mt-[-10px]
        lg:mt-[-35px]
        mb-16
      "
            >
              {achievementStats.map((stat, idx) => {
                const StatIcon = stat.icon;

                return (
                  <div
                    key={idx}
                    className="
              group
              relative
              bg-white/90
              backdrop-blur-xl
              rounded-[20px]
              p-5
              min-h-[190px]
              border
              border-white/80
              shadow-[0_12px_35px_rgba(8,76,59,0.10)]
              hover:shadow-[0_18px_45px_rgba(8,76,59,0.16)]
              hover:-translate-y-1
              transition-all
              duration-300
              flex
              flex-col
              justify-between
              overflow-hidden
            "
                  >
                    {/* Decorative circle */}
                    <div
                      className="
                absolute
                -right-8
                -top-8
                w-24
                h-24
                rounded-full
                bg-[#dce9df]/45
                transition-transform
                duration-500
                group-hover:scale-125
              "
                    />

                    {/* Icon */}
                    <div
                      className="
                relative
                z-10
                w-12
                h-12
                rounded-full
                bg-[#dce9df]
                flex
                items-center
                justify-center
                text-[#084c3b]
                mb-5
                transition-all
                duration-300
                group-hover:bg-[#084c3b]
                group-hover:text-white
              "
                    >
                      <StatIcon className="w-6 h-6" />
                    </div>

                    {/* Number + Label */}
                    <div className="relative z-10">
                      <h3
                        className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-[#084c3b]
                  mb-2
                  tracking-tight
                "
                      >
                        {stat.number}
                      </h3>

                      <p
                        className="
                  text-xs
                  sm:text-sm
                  text-gray-600
                  font-serif
                  leading-snug
                  max-w-[190px]
                "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ================================================================
        KATEGORI PRESTASI
        ================================================================ */}
            <div
              className="
        relative
        border-t
        border-[#c49a43]/30
        pt-8
      "
            >
              {/* Heading */}
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="
            text-xs
            font-bold
            tracking-[0.25em]
            uppercase
            text-[#c49a43]
          "
                >
                  — KATEGORI PRESTASI
                </span>

                <div className="flex-1 h-px bg-[#c49a43]/15" />
              </div>

              {/* ==============================================================
          KATEGORI + CTA
          ============================================================== */}
              <div
                className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-8
          lg:gap-10
        "
              >
                {/* ------------------------------------------------------------
            CTA
            ------------------------------------------------------------ */}
                <div className="shrink-0 w-full lg:w-auto">
                  <button
                    className="
              group
              bg-[#084c3b]
              hover:bg-[#06382b]
              text-white
              px-7
              py-4
              rounded-xl
              font-serif
              text-xs
              font-bold
              tracking-wide
              flex
              items-center
              justify-center
              gap-2
              shadow-md
              hover:shadow-lg
              transition-all
              duration-300
              whitespace-nowrap
            "
                  >
                    <span>Lihat Semua Prestasi</span>

                    <ArrowRight
                      className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
                    />
                  </button>
                </div>

                {/* ------------------------------------------------------------
            CATEGORY LIST
            ------------------------------------------------------------ */}
                <div
                  className="
            grid
            grid-cols-2
            sm:grid-cols-4
            lg:grid-cols-7
            gap-y-7
            lg:gap-y-0
            w-full
            items-stretch
          "
                >
                  {achievementCategories.map((cat, idx) => {
                    const CatIcon = cat.icon;

                    return (
                      <div
                        key={idx}
                        className="
                  relative
                  flex
                  items-center
                  justify-center
                  min-w-0
                "
                      >
                        <div
                          className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    cursor-pointer
                    w-full
                    py-2
                    px-2
                  "
                        >
                          {/* Icon */}
                          <div
                            className="
                      relative
                      w-[60px]
                      h-[68px]
                      rounded-full
                      bg-[#dce9df]/65
                      text-[#084c3b]
                      flex
                      items-center
                      justify-center
                      mb-3
                      transition-all
                      duration-300
                      group-hover:bg-[#084c3b]
                      group-hover:text-white
                      group-hover:scale-105
                      shadow-sm
                    "
                          >
                            {/* Inner ring */}
                            <div
                              className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border
                        border-[#084c3b]/10
                        group-hover:border-white/20
                        transition-colors
                      "
                            />

                            <CatIcon className="relative z-10 w-8 h-8" />
                          </div>

                          {/* Category title */}
                          <span
                            className="
                      font-serif
                      text-xs
                      font-bold
                      text-gray-800
                      group-hover:text-[#084c3b]
                      transition-colors
                    "
                          >
                            {cat.title}
                          </span>
                        </div>

                        {/* Vertical divider */}
                        {idx < achievementCategories.length - 1 && (
                          <div
                            className="
                      hidden
                      lg:block
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      h-12
                      w-px
                      bg-gray-300/50
                    "
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ================================================================
        DECORATIVE LEAVES — BOTTOM RIGHT
        ================================================================ */}
            <div
              className="
        absolute
        hidden
        lg:block
        bottom-[-80px]
        right-[-40px]
        opacity-40
        pointer-events-none
      "
            >
              <svg
                width="150"
                height="180"
                viewBox="0 0 150 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92 175C87 132 101 91 139 55"
                  stroke="#084c3b"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M102 133C76 119 65 99 67 75C91 83 105 101 102 133Z"
                  fill="#dce9df"
                />

                <path
                  d="M111 108C105 82 113 58 136 39C144 66 134 91 111 108Z"
                  fill="#c8ddd1"
                />

                <path
                  d="M91 151C66 146 50 130 43 107C68 110 84 124 91 151Z"
                  fill="#dce9df"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
