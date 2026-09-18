import React from "react";
import {
  ArrowRight,
  MessageCircle,
  CalendarDays,
  Compass,
} from "lucide-react";

import {
  IslamicCanvasWatermark,
  TazhibCornerOrnament,
} from "./IslamicElements";

import { OfficialLogo } from "./OfficialLogo";

const imgBuildingBanner =
  "/images/mts_building_banner_1787313949455.jpg";

interface CtaBannerProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenPpdb,
  onOpenVisit,
}) => {
  return (
    <section
      id="ppdb-banner"
      className="
        relative
        w-full
        py-6
        sm:py-8
        lg:py-10
        bg-[#042416]
        text-white
        overflow-hidden
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <IslamicCanvasWatermark
        opacityClass="opacity-[0.035]"
        colorClass="text-[#d49b28]"
      />

      <div
        className="
          absolute
          -top-32
          left-[15%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#0f5735]/25
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          right-[10%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-[#d49b28]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          lg:px-6
        "
      >
        {/* =========================================================================
    STATISTICS SECTION (Mentok kiri-kanan, full-width, background gelap)
    ========================================================================= */}
<div
  className="
    mb-10
    py-10
    border-y
    border-[#1b6641]
    w-full
  "
>
  <div className="w-full"> 
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Bagian Kiri: Judul & Subjudul Statistik */}
      <div className="lg:col-span-4 lg:border-r lg:border-[#1b6641] lg:pr-8 pl-5 lg:pl-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-5 bg-[#d49b28]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e2b34f]">
            BUKTI NYATA, DAMPAK NYATA
          </span>
        </div>
        <h3
          className="
            font-serif
            text-2xl
            sm:text-3xl
            font-bold
            text-white
            mb-2
          "
        >
          Prestasi & Capaian
        </h3>
        <p className="font-serif text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
          Hasil dari proses pendidikan yang konsisten dan terarah.
        </p>
      </div>

      {/* Bagian Kanan: Item Angka Statistik */}
      <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center pr-5 lg:pr-10">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center p-2">
          <span
            className="
              font-serif
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#e2b34f]
              tracking-tight
              mb-1.5
            "
          >
            100+
          </span>
          <span className="font-serif text-xs text-emerald-100/80 leading-snug max-w-[140px]">
            Prestasi Akademik & Non-Akademik
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center p-2 sm:border-l sm:border-[#1b6641]/60">
          <span
            className="
              font-serif
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#e2b34f]
              tracking-tight
              mb-1.5
            "
          >
            85%
          </span>
          <span className="font-serif text-xs text-emerald-100/80 leading-snug max-w-[140px]">
            Lulusan Melanjutkan ke MA Pilihan
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center p-2 sm:border-l sm:border-[#1b6641]/60">
          <span
            className="
              font-serif
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#e2b34f]
              tracking-tight
              mb-1.5
            "
          >
            25+
          </span>
          <span className="font-serif text-xs text-emerald-100/80 leading-snug max-w-[140px]">
            Program Pengembangan Diri
          </span>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center justify-center p-2 sm:border-l sm:border-[#1b6641]/60">
          <span
            className="
              font-serif
              text-3xl
              sm:text-4xl
              font-extrabold
              text-[#e2b34f]
              tracking-tight
              mb-1.5
            "
          >
            100%
          </span>
          <span className="font-serif text-xs text-emerald-100/80 leading-snug max-w-[140px]">
            Pendampingan Karier & Pendidikan Lanjut
          </span>
        </div>

      </div>

    </div>
  </div>
</div>

        {/* =====================================================
            MAIN CTA CARD
        ====================================================== */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border
            border-[#1b6641]
            bg-[#06351f]/95
            shadow-[0_15px_45px_rgba(0,0,0,0.22)]
            backdrop-blur-sm
          "
        >
          {/* Decorative ornaments */}

          <TazhibCornerOrnament
            position="top-left"
            className="opacity-20"
          />

          <TazhibCornerOrnament
            position="bottom-right"
            className="opacity-20"
          />

          {/* =====================================================
              CONTENT GRID (Diperbarui proporsinya agar tombol sejajar)
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              items-stretch
            "
          >

            {/* ===================================================
                LEFT — BRAND (col-span-3)
            ==================================================== */}

            <div
              className="
                lg:col-span-3
                p-4
                sm:p-5
                flex
                flex-col
                justify-between
                border-b
                lg:border-b-0
                lg:border-r
                border-[#1b6641]
              "
            >
              <div>
                <div className="mb-3">
                  <OfficialLogo
                    variant="white"
                    height={28}
                    className="w-auto bg-transparent"
                  />
                </div>

                <p
                  className="
                    text-emerald-100/75
                    text-[11px]
                    sm:text-xs
                    leading-relaxed
                  "
                >
                  MTs Asih Putera membina remaja beriman,
                  bermalar, berkarakter, dan siap membawa manfaat.
                </p>
              </div>

              {/* Social Media */}

              <div className="mt-4 lg:mt-5">
                <p
                  className="
                    text-[9px]
                    text-emerald-200/60
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    mb-2
                  "
                >
                  Media Sosial
                </p>

                <div className="flex items-center gap-1.5">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-full bg-[#0a4328] border border-[#26754b] flex items-center justify-center text-white hover:bg-[#d49b28] hover:border-[#d49b28] transition-all"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-full bg-[#0a4328] border border-[#26754b] flex items-center justify-center text-white hover:bg-[#d49b28] hover:border-[#d49b28] transition-all"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-7 h-7 rounded-full bg-[#0a4328] border border-[#26754b] flex items-center justify-center text-white hover:bg-[#d49b28] hover:border-[#d49b28] transition-all"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-7 h-7 rounded-full bg-[#0a4328] border border-[#26754b] flex items-center justify-center text-white hover:bg-[#d49b28] hover:border-[#d49b28] transition-all"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .594.044.877.13V9.41a6.33 6.33 0 0 0-.877-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.47V8.75a8.18 8.18 0 0 0 4.91 1.63V6.93a4.85 4.85 0 0 1-1-.24z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            {/* ===================================================
                CENTER — FINAL CTA (Diperlebar ke lg:col-span-6)
            ==================================================== */}

            <div
              className="
                lg:col-span-6
                p-5
                sm:p-6
                flex
                flex-col
                justify-center
                border-b
                lg:border-b-0
                lg:border-r
                border-[#1b6641]
              "
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-px w-5 bg-[#d49b28]" />
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#e2b34f]">
                  MARI KENAL LEBIH DEKAT
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  text-[19px]
                  sm:text-[22px]
                  lg:text-[23px]
                  font-bold
                  leading-[1.25]
                  text-white
                  mb-2
                "
              >
                Apakah MTs Asih Putera adalah lingkungan yang tepat
                untuk anak Anda?
              </h2>

              {/* Description */}
              <p
                className="
                  text-emerald-100/85
                  text-xs
                  sm:text-[13px]
                  leading-relaxed
                  mb-3.5
                "
              >
                Kenali programnya. Rasakan suasananya. Bertemu dengan kami.
              </p>

              {/* =================================================
                  CTA BUTTONS (Disusun flex agar muat 1 baris)
              ================================================== */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                "
              >
                {/* School Visit */}
                <button
                  id="cta-school-visit-banner"
                  onClick={onOpenVisit}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    bg-[#d49b28]
                    hover:bg-[#e0aa37]
                    text-white
                    font-semibold
                    text-[11px]
                    sm:text-[11.5px]
                    px-2.5
                    py-2
                    rounded-lg
                    shadow-sm
                    transition-all
                    duration-300
                    cursor-pointer
                    whitespace-nowrap
                  "
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Jadwalkan School Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Kenali PPDB */}
                <button
                  id="cta-kenali-ppdb-banner"
                  onClick={onOpenPpdb}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    bg-[#0a4328]
                    hover:bg-[#125c38]
                    border
                    border-[#26754b]
                    text-white
                    font-semibold
                    text-[11px]
                    sm:text-[11.5px]
                    px-2.5
                    py-2
                    rounded-lg
                    transition-all
                    duration-300
                    cursor-pointer
                    whitespace-nowrap
                  "
                >
                  <Compass className="w-3.5 h-3.5 text-[#e2b34f]" />
                  <span>Kenali PPDB</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e2b34f] group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Tanya Tim Kami */}
                <a
                  id="cta-tanya-tim-banner"
                  href="https://wa.me/6281122334455?text=Halo%20Tim%20MTs%20Asih%20Putera,%20saya%20ingin%20bertanya%20mengenai%20program%20dan%20PPDB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    bg-[#0a4328]
                    hover:bg-[#125c38]
                    border
                    border-[#26754b]
                    text-white
                    font-semibold
                    text-[11px]
                    sm:text-[11.5px]
                    px-2.5
                    py-2
                    rounded-lg
                    transition-all
                    duration-300
                    cursor-pointer
                    whitespace-nowrap
                  "
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#e2b34f]" />
                  <span>Tanya Tim Kami</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e2b34f] group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>


            {/* ===================================================
                RIGHT — SCHOOL IMAGE (col-span-3)
            ==================================================== */}

            <div
              className="
                lg:col-span-3
                p-4
                sm:p-5
                flex
                items-center
              "
            >
              <div
                className="
                  relative
                  w-full
                  h-[135px]
                  sm:h-[145px]
                  lg:h-[155px]
                  rounded-xl
                  overflow-hidden
                  border
                  border-[#286b49]
                  shadow-md
                  group
                "
              >
                <img
                  src={imgBuildingBanner}
                  alt="Gedung MTs Asih Putera"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#032013]/95
                    via-[#032013]/60
                    to-[#032013]/15
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-3
                  "
                >
                  <div className="inline-flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d49b28]" />
                    <span className="text-[8px] uppercase tracking-[0.15em] font-bold text-[#e2b34f]">
                      MTs Asih Putera
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs font-semibold text-white leading-snug">
                    Rasakan suasana belajar dan bertemu dengan kami.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};