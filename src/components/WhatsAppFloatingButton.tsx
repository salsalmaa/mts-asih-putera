import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  onOpenPpdb,
  onOpenVisit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickQuestions = [
    'Berapa biaya pendaftaran PPDB 2026?',
    'Apa saja syarat jalur tahfidz?',
    'Bagaimana cara menjadwalkan tur sekolah?',
    'Kapan batas akhir pendaftaran gelombang 1?'
  ];

  const handleSelectQuestion = (q: string) => {
    const url = `https://wa.me/6281122334455?text=${encodeURIComponent('Halo Admin MTs Asih Putera, saya ingin bertanya: ' + q)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 mb-3 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0a4b2f] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-xs">Konsultasi MTs Asih Putera</h4>
                <span className="text-[10px] text-[#a3e635] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse"></span>
                  Online & Siap Membantu
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick FAQ Options */}
          <div className="p-4 space-y-2.5 bg-[#faf9f5]">
            <p className="text-[11px] text-gray-500 font-medium">Pilih pertanyaan cepat atau hubungi kami langsung:</p>
            
            <div className="space-y-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQuestion(q)}
                  className="w-full text-left text-xs bg-white hover:bg-[#0a4b2f]/5 p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:text-[#0a4b2f] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{q}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0a4b2f] shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-200 flex flex-col gap-1.5">
              <a
                href="https://wa.me/6281122334455?text=Halo%20Admin%20MTs%20Asih%20Putera,%20saya%20ingin%20konsultasi%20PPDB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1eb857] text-white text-xs font-bold py-2 rounded-lg text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Buka WhatsApp Langsung</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="floating-wa-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1eb857] text-white shadow-xl flex items-center justify-center hover:scale-108 active:scale-95 transition-all cursor-pointer group"
        aria-label="Konsultasi WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white" />
        )}
      </button>
    </div>
  );
};
