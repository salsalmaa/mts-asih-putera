"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Users,
  Award,
  Heart,
} from "lucide-react";
import { OfficialLogo } from "./OfficialLogo";

interface HeaderProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "profil", label: "Profil MI" },
  { id: "kurikulum", label: "Kurikulum" },
  { id: "program", label: "Program" },
  { id: "kesiswaan", label: "Kesiswaan" },
  { id: "prestasi", label: "Prestasi" },
  { id: "galeri", label: "Galeri" },
  { id: "publikasi", label: "Publikasi" },
  { id: "kontak", label: "Hubungi" },
];

export const Header: React.FC<HeaderProps> = ({ onOpenPpdb, onOpenVisit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for sticky navbar styling and section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 15);

      // If at the top area (hero), keep all menu items clean without default selection
      if (scrollPos < 300) {
        setActiveSection(null);
        return;
      }

      // Bottom of page detection -> highlight Kontak
      if (
        window.innerHeight + scrollPos >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("kontak");
        return;
      }

      let currentFound: string | null = null;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section header/top is currently in view
          if (rect.top <= 180 && rect.bottom > 180) {
            currentFound = item.id;
            break;
          }
        }
      }

      if (currentFound) {
        setActiveSection(currentFound);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Account for sticky header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-sticky-navbar"
      className={`w-full sticky top-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/90"
          : "bg-white/98 backdrop-blur-sm shadow-xs border-b border-gray-100"
      }`}
    >
      {/* Top green bar */}
      <div className="bg-[#093e25] text-[#d1e7dd] text-xs py-2 px-4 sm:px-8 border-b border-[#0f5434]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href="tel:081122334455"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>Hotline 0811 2233 4455</span>
            </a>
            <span className="text-[#196b44] hidden sm:inline">|</span>
            <a
              href="mailto:info@asihputera.sch.id"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#e5a93c]" />
              <span>info@miasihputera.sch.id</span>
            </a>
          </div>

          {/* Right portal links */}
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenVisit}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Orang Tua
            </button>
            <span className="text-[#196b44]">|</span>
            <button
              onClick={() => scrollToSection("prestasi")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Alumni
            </button>
            <span className="text-[#196b44]">|</span>
            <button
              onClick={() => scrollToSection("kontak")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Karier
            </button>
            <span className="text-[#196b44]">|</span>
            <button
              onClick={onOpenPpdb}
              className="hover:text-[#e5a93c] transition-colors cursor-pointer font-medium"
            >
              Donasi
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand logo - Official MTs Asih Putera Logo */}
        <a
          href="#"
          className="flex items-center group bg-transparent shrink-0 overflow-visible"
          id="school-brand-logo"
          aria-label="MTs Asih Putera Homepage"
        >
          <OfficialLogo
            variant="color"
            height={36}
            className="transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop navigation menu with active indicator & smooth hover effects */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] xl:text-[13.5px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group flex flex-col items-center select-none ${
                  isActive
                    ? "text-[#0a4b2f] font-bold bg-[#0a4b2f]/8 shadow-2xs"
                    : "text-gray-600 hover:text-[#0a4b2f] hover:bg-[#0a4b2f]/4 font-medium"
                }`}
              >
                <span className="relative z-10 transition-colors">
                  {item.label}
                </span>

                {/* Animated Gold/Green Underline Indicator */}
                <span
                  className={`absolute bottom-0.5 left-2.5 right-2.5 h-[2.5px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#d49b28] scale-x-100 opacity-100 shadow-[0_0_8px_rgba(212,155,40,0.65)]"
                      : "bg-[#0a4b2f] scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-60"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* PPDB Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-ppdb-btn"
            onClick={onOpenPpdb}
            className="bg-[#d49b28] hover:bg-[#b87e14] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>PPDB 2026/2027</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#0a4b2f] focus:outline-hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#0a4b2f]/10 text-[#0a4b2f] font-bold border-l-4 border-[#d49b28]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#0a4b2f] border-b border-gray-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#d49b28] shadow-[0_0_6px_rgba(212,155,40,0.8)]" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPpdb();
              }}
              className="w-full bg-[#d49b28] hover:bg-[#b87e14] text-white font-semibold py-2.5 rounded-md text-sm flex items-center justify-center gap-2"
            >
              <span>Daftar PPDB 2026/2027</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisit();
              }}
              className="w-full border border-[#0a4b2f] text-[#0a4b2f] hover:bg-[#0a4b2f]/5 font-semibold py-2 rounded-md text-sm"
            >
              Jadwalkan Kunjungan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
