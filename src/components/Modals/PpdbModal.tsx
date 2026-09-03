import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Download,
  Calendar,
  Award,
  BookOpen,
  Send,
  HelpCircle,
  FileText
} from 'lucide-react';
import { PpdbFormData } from '../../types';

interface PpdbModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PpdbModal: React.FC<PpdbModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'form' | 'info' | 'biaya'>('form');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<PpdbFormData>({
    fullName: '',
    email: '',
    phone: '',
    gender: 'Laki-laki',
    previousSchool: '',
    entryYear: '2026/2027',
    pathway: 'Reguler',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadBrochure = () => {
    // Generate simulated download
    const element = document.createElement('a');
    const file = new Blob([
      `=== BROSUR PPDB MTs ASIH PUTERA 2026/2027 ===\n\n` +
      `Madrasah Tsanawiyah yang memadukan tauhid, adab, akademik, pembelajaran aktif, dan pengalaman hidup.\n\n` +
      `Alamat: Jl. Daeng Moh. Ardiwinata No. 199, Kota Cimahi\n` +
      `Hotline: 0811 2233 4455\n` +
      `Website: asihputera.sch.id\n\n` +
      `Jalur Pendaftaran:\n` +
      `1. Jalur Prestasi Akademik & Tahfidz\n` +
      `2. Jalur Reguler Berbasis Minat & Bakat\n` +
      `3. Jalur Beasiswa Rabbani Yayasan Asih Putera\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Brosur-PPDB-MTs-Asih-Putera-2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0a4b2f] text-white p-5 sm:p-6 flex items-center justify-between relative shrink-0">
          <div>
            <div className="text-[11px] font-bold text-[#e5a93c] uppercase tracking-wider mb-0.5">
              Penerimaan Peserta Didik Baru
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              PPDB MTs Asih Putera 2026/2027
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 bg-[#faf9f5] px-6 text-xs sm:text-sm font-semibold shrink-0">
          <button
            onClick={() => setActiveTab('form')}
            className={`py-3.5 px-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'form'
                ? 'border-[#0a4b2f] text-[#0a4b2f]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Formulir Pendaftaran
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3.5 px-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'info'
                ? 'border-[#0a4b2f] text-[#0a4b2f]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Jalur & Syarat
          </button>
          <button
            onClick={() => setActiveTab('biaya')}
            className={`py-3.5 px-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'biaya'
                ? 'border-[#0a4b2f] text-[#0a4b2f]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Biaya & Beasiswa
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'form' && (
            <div>
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#0a4b2f]">
                    Pendaftaran Berhasil Terkirim!
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Terima kasih telah mendaftarkan calon siswa <strong>{formData.fullName}</strong>. Tim panitia PPDB akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong> untuk konfirmasi berkas dan jadwal tes observasi.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleDownloadBrochure}
                      className="bg-[#faf9f5] border border-gray-300 text-gray-700 font-semibold px-4 py-2.5 rounded-md text-xs flex items-center gap-2 hover:bg-gray-100"
                    >
                      <Download className="w-4 h-4 text-[#0a4b2f]" />
                      <span>Download Panduan PPDB</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="bg-[#0a4b2f] text-white font-semibold px-6 py-2.5 rounded-md text-xs hover:bg-[#073621]"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Nama Lengkap Calon Siswa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Raihan Al-Fatih"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Jenis Kelamin *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Nomor WhatsApp Orang Tua *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Orang Tua *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="orangtua@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Asal Sekolah (SD/MI) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: SD IT Asih Putera"
                        value={formData.previousSchool}
                        onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Pilihan Jalur Masuk *
                      </label>
                      <select
                        value={formData.pathway}
                        onChange={(e) => setFormData({ ...formData, pathway: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                      >
                        <option value="Reguler">Jalur Reguler (Umum)</option>
                        <option value="Tahfidz Al-Qur'an">Jalur Tahfidz (Min. 1-2 Juz)</option>
                        <option value="Prestasi Akademik">Jalur Prestasi Akademik (Nilai Rapor/OSN)</option>
                        <option value="Prestasi Seni & Olahraga">Jalur Prestasi Seni & Olahraga</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Catatan Tambahan / Minat Khusus Siswa
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan minat bakat siswa (misal: robotik, public speaking, sains, hafalan juz 30)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0a4b2f] focus:outline-hidden"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleDownloadBrochure}
                      className="text-xs font-semibold text-gray-600 hover:text-[#0a4b2f] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#d49b28]" />
                      <span>Download Brosur Lengkap</span>
                    </button>

                    <button
                      type="submit"
                      className="bg-[#d49b28] hover:bg-[#b87e14] text-white font-semibold px-6 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Kirim Pendaftaran</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === 'info' && (
            <div className="space-y-5 text-xs sm:text-sm text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#faf9f5] rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-[#0a4b2f] font-bold mb-2">
                    <Award className="w-4 h-4 text-[#d49b28]" />
                    <span>Jalur Prestasi & Tahfidz</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Bagi calon siswa berprestasi di tingkat kota/provinsi atau memiliki hafalan Al-Qur'an minimal 1-2 juz mutqin. Dapatkan potongan biaya dana pengembangan.
                  </p>
                  <ul className="text-[11px] space-y-1 text-gray-500">
                    <li>• Tes tasmi' Al-Qur'an langsung</li>
                    <li>• Verifikasi piagam/sertifikat kejuaraan</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#faf9f5] rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-[#0a4b2f] font-bold mb-2">
                    <BookOpen className="w-4 h-4 text-[#d49b28]" />
                    <span>Jalur Reguler</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Terbuka bagi lulusan SD/MI yang siap mengikuti proses pembinaan adab, akademik, kemandirian, dan kepemimpinan remaja.
                  </p>
                  <ul className="text-[11px] space-y-1 text-gray-500">
                    <li>• Tes pemetaan potensi akademik & psikologi</li>
                    <li>• Wawancara komitmen orang tua & santri</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h5 className="font-bold text-sm text-[#0a4b2f] mb-2">Jadwal Gelombang PPDB 2026/2027</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-md">
                    <span className="font-medium">Gelombang 1 (Early Bird & Prestasi)</span>
                    <span className="text-[#0a4b2f] font-bold">1 Jan - 31 Mar 2026</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-gray-50 rounded-md">
                    <span className="font-medium">Gelombang 2 (Reguler)</span>
                    <span className="text-[#0a4b2f] font-bold">1 Apr - 30 Jun 2026</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'biaya' && (
            <div className="space-y-4 text-xs sm:text-sm text-gray-700">
              <div className="p-4 bg-[#faf9f5] rounded-xl border border-gray-200">
                <h5 className="font-serif font-bold text-sm text-[#0a4b2f] mb-3">Komponen Biaya Pendidikan</h5>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span>Biaya Pendaftaran & Observasi</span>
                    <span className="font-bold text-gray-900">Rp 350.000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span>Infaq Pengembangan Pendidikan (IPP)</span>
                    <span className="font-bold text-gray-900">Disesuaikan Jalur</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span>SPP Bulanan (Termasuk Tahfidz & Ekstra)</span>
                    <span className="font-bold text-gray-900">Terjangkau & Transparan</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0a4b2f]/5 rounded-xl border border-[#0a4b2f]/20">
                <h6 className="font-bold text-xs text-[#0a4b2f] mb-1">Skema Keringanan & Beasiswa Yayasan:</h6>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tersedia beasiswa tahfidz dan prestasi untuk siswa terpilih serta skema subsidi silang bagi keluarga membutuhkan.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
