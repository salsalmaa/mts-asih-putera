import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Send } from 'lucide-react';
import { VisitFormData } from '../../types';

interface VisitScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitScheduleModal: React.FC<VisitScheduleModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<VisitFormData>({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Pagi (08.30 - 10.30 WIB)',
    numberOfAttendees: 2,
    interest: 'Tur Kampus & Konsultasi Kurikulum',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0a4b2f] text-white p-5 sm:p-6 flex items-center justify-between relative shrink-0">
          <div>
            <div className="text-[11px] font-bold text-[#e5a93c] uppercase tracking-wider mb-0.5">
              School Tour & Consultation
            </div>
            <h3 className="font-serif font-bold text-xl text-white">
              Jadwalkan Kunjungan Kampus
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0a4b2f]">
                Jadwal Kunjungan Dikonfirmasi!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Terima kasih Bapak/Ibu <strong>{formData.parentName}</strong>. Staf humas kami akan menghubungi nomor <strong>{formData.phone}</strong> untuk mengirimkan barcode akses masuk tamu dan panduan lokasi.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#0a4b2f] text-white text-xs font-semibold px-6 py-2.5 rounded-lg hover:bg-[#073621]"
              >
                Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Nama Orang Tua / Wali *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bapak Hendra"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Nama Calon Siswa</label>
                <input
                  type="text"
                  placeholder="Contoh: Fadhil Pratama"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">WhatsApp Aktif *</label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Rencana Tanggal *</label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Sesi Waktu *</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                  >
                    <option value="Pagi (08.30 - 10.30 WIB)">Pagi (08.30 - 10.30 WIB)</option>
                    <option value="Siang (13.00 - 15.00 WIB)">Siang (13.00 - 15.00 WIB)</option>
                    <option value="Sabtu Pagi (Khusus Weekend)">Sabtu Pagi (Khusus Weekend)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Jumlah Orang Hadir</label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={formData.numberOfAttendees}
                    onChange={(e) => setFormData({ ...formData, numberOfAttendees: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-[#0a4b2f] hover:bg-[#073621] text-white text-xs font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Reservasi Jadwal</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
