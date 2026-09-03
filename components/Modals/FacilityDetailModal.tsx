import React from 'react';
import { X, Check, Users } from 'lucide-react';
import { FacilityItem } from '../../types';

interface FacilityDetailModalProps {
  facility: FacilityItem | null;
  onClose: () => void;
}

export const FacilityDetailModal: React.FC<FacilityDetailModalProps> = ({
  facility,
  onClose,
}) => {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image */}
        <div className="relative h-60 sm:h-72 shrink-0 bg-gray-900">
          <img
            src={facility.image}
            alt={facility.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif font-bold text-2xl drop-shadow-md">
              {facility.title}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-gray-700">
          <p className="text-gray-600 leading-relaxed">
            {facility.description}
          </p>

          {facility.capacity && (
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0a4b2f] bg-[#faf9f5] p-3 rounded-lg border border-gray-200">
              <Users className="w-4 h-4 text-[#d49b28]" />
              <span>Kapasitas: {facility.capacity}</span>
            </div>
          )}

          {facility.features && (
            <div>
              <h5 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-2">
                Kelengkapan Fasilitas
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {facility.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a4b2f]"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#0a4b2f] text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-[#073621]"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
};
