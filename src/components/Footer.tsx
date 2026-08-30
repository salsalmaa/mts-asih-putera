import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from 'lucide-react';
import {
  IslamicCanvasWatermark,
} from './IslamicElements';

interface FooterProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setSubscribedSuccess(true);
      setSubscribedEmail('');
      setTimeout(() => setSubscribedSuccess(false), 5000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="kontak" className="w-full bg-[#042416] text-[#d1e7dd] border-t border-[#0d3f26] relative overflow-hidden">
      {/* Subtle Islamic Geometric Watermark across Footer Area */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.03]" colorClass="text-[#d49b28]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-[#0e432a]">
          
          {/* Column 1 & 2: Tautan Cepat (4 cols total: 2 cols + 2 cols or a split grid) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
              <span>Tautan Cepat</span>
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-emerald-100/80">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('profil')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Profil MTs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('kurikulum')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Kurikulum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('program')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('kesiswaan')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Kesiswaan
                  </button>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('prestasi')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Prestasi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('galeri')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Galeri
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('publikasi')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Publikasi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('kontak')}
                    className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                  >
                    Hubungi
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Program Unggulan (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
              <span>Program Unggulan</span>
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                >
                  Tahfidz & Adab
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                >
                  Project Based Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                >
                  Riset & Public Speaking
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                >
                  City Survival
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('program')}
                  className="hover:text-[#e5a93c] transition-colors cursor-pointer text-left"
                >
                  Leadership Camp
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak (3 cols) */}
          <div className="lg:col-span-2 xl:col-span-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
              <span>Kontak</span>
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e5a93c] shrink-0 mt-0.5" />
                <span>Jl. Pesantren No. 31, Kota Cimahi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                <span>(022) 665 4321 / 0811 2233 4455</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                <span>info@asihputera.sch.id</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter (2 cols or 2.5 cols) */}
          <div className="lg:col-span-3 xl:col-span-2">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d49b28]"></span>
              <span>Newsletter</span>
            </h4>
            <p className="text-xs text-emerald-100/80 mb-3 leading-relaxed">
              Dapatkan info berkala agenda sekolah dan PPDB.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email Anda..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="w-full bg-[#083520] border border-[#145a38] text-white text-xs pl-3 pr-10 py-2.5 rounded-md focus:outline-hidden focus:border-[#d49b28] placeholder-emerald-200/50"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-[#c89635] hover:bg-[#b07d1e] text-white p-1.5 rounded-sm transition-colors cursor-pointer shadow-xs"
                  title="Langganan Newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribedSuccess && (
                <div className="flex items-center gap-1.5 text-xs text-[#a3e635]">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Email terdaftar!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-3">
          <p>© 2024 MTs Asih Putera. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#kebijakan" className="hover:text-[#e5a93c] transition-colors">
              Kebijakan Privasi
            </a>
            <span>•</span>
            <a href="#syarat" className="hover:text-[#e5a93c] transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
