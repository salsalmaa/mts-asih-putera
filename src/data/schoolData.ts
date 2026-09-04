import {
  StatItem,
  WhyUsItem,
  OutcomeItem,
  PillarItem,
  JourneyStage,
  ProgramItem,
  FacilityItem,
  TestimonialItem,
  NewsItem
} from '../types';

import imgTahfidzQuran from '../assets/images/prog_tahfidz_adab_new.jpg';
import imgProjectLearning from '../assets/images/prog_pbl_new.jpg';
import imgPublicSpeaking from '../assets/images/prog_riset_speaking_new.jpg';
import imgBabaktiSepuh from '../assets/images/prog_babakti_sepuh_new.jpg';
import imgCitySurvival from '../assets/images/prog_city_survival_new.jpg';
import imgLeadershipCamp from '../assets/images/prog_leadership_camp_new.jpg';
import imgProgOlympiad from '../assets/images/prog_olympiad_sains_new.jpg';
import imgProgTahfidzMtq from '../assets/images/prog_tahfidz_mtq_new.jpg';
import imgProgScienceInnovation from '../assets/images/prog_science_innovation_new.jpg';
import imgProgSocialService from '../assets/images/prog_social_service_new.jpg';
import imgProgArtsCulture from '../assets/images/prog_arts_culture_new.jpg';
import imgWhyTauhid from '../assets/images/why_tauhid_new.jpg';
import imgWhyAkademik from '../assets/images/why_akademik_new.jpg';
import imgWhyKarakter from '../assets/images/why_karakter_new.jpg';
import imgWhyLingkungan from '../assets/images/why_lingkungan_new.jpg';
import imgJourneyKelas7 from '../assets/images/journey_kelas7_new.jpg';
import imgJourneyKelas8 from '../assets/images/journey_kelas8_new.jpg';
import imgJourneyKelas9 from '../assets/images/journey_kelas9_new.jpg';
import imgNewsOpenHouse from '../assets/images/news_openhouse_new.jpg';
import imgNewsMilad from '../assets/images/news_milad_new.png';
import imgNewsLeadership from '../assets/images/news_leadership_new.jpg';
import imgFacilityClassroom from '../assets/images/fac_kelas_new.jpg';
import imgFacilityLibrary from '../assets/images/fac_perpus_new.jpg';
import imgFacilityLab from '../assets/images/fac_lab_new.jpg';
import imgFacilityMosque from '../assets/images/fac_masjid_new.jpg';
import imgFacilitySports from '../assets/images/fac_olahraga_new.jpg';
import imgFacilityCreativity from '../assets/images/fac_kreativitas_new.jpg';
import imgAvatarBapakFajar from '../assets/images/bapak_fajar_testimonial_1787396774116.jpg';
import imgAvatarIbuRina from '../assets/images/ibu_rina_testimonial_1787396789356.jpg';
import imgAvatarRaihan from '../assets/images/raihan_siswa_mts_1787396803996.jpg';

export const STATS_DATA: StatItem[] = [
  {
    id: 'foundation-year',
    value: '1985',
    label: 'TAHUN BERDIRI',
    iconName: 'Calendar',
  },
  {
    id: 'students-mts',
    value: '350+',
    label: 'JUMLAH SISWA',
    iconName: 'GraduationCap',
  },
  {
    id: 'staff',
    value: '80+',
    label: 'JUMLAH GURU & STAF',
    iconName: 'Users',
  },
  {
    id: 'students-yayasan',
    value: '1.200+',
    label: 'JUMLAH SISWA YAYASAN',
    iconName: 'Building2',
  },
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'tauhid',
    title: 'Tauhid & Akhlak sebagai Fondasi',
    description: 'Menanamkan nilai tauhid dan adab sebagai fondasi berpikir, bersikap, dan bertindak.',
    iconName: 'BookOpen',
    tag: 'FONDASI SPIRITUAL',
    image: imgWhyTauhid,
    details: [
      'Pembiasaan shalat berjamaah, dhuha, dan zikir harian',
      'Kajian adab harian tematik sebelum memulai KBM',
      'Bimbingan personal (Tarbiyah Fardiyah) oleh guru wali',
      'Kurikulum adab yang terintegrasi di setiap mata pelajaran'
    ]
  },
  {
    id: 'akademik',
    title: 'Akademik Kuat & Bernalar',
    description: 'Pembelajaran bermakna yang mengembangkan kemampuan berpikir kritis, kreatif, dan literat.',
    iconName: 'FlaskConical',
    tag: 'BERPIKIR KRITIS',
    image: imgWhyAkademik,
    details: [
      'Laboratorium sains lengkap dengan eksperimen berkala',
      'Pendekatan STEAM (Science, Technology, Engineering, Arts, Math)',
      'Literasi & riset ilmiah sederhana untuk siswa',
      'Penguatan matematika konseptual dan bahasa internasional'
    ]
  },
  {
    id: 'karakter',
    title: 'Pembinaan Remaja & Karakter',
    description: 'Pembinaan menyeluruh untuk membentuk karakter tangguh, mandiri, dan bertanggung jawab.',
    iconName: 'Users2',
    tag: 'LEADERSHIP & MANDIRI',
    image: imgWhyKarakter,
    details: [
      'Program kepanduan Pramuka dan Kepemimpinan OSIS',
      'Latihan bertahan hidup dan pemecahan masalah nyata',
      'Mentoring psikologi remaja dan konseling terpadu',
      'Pembiasaan tanggung jawab kebersihan dan kedisiplinan'
    ]
  },
  {
    id: 'lingkungan',
    title: 'Lingkungan Aman, Positif, dan Bertumbuh',
    description: 'Lingkungan belajar yang aman, nyaman, dan mendukung tumbuh kembang remaja.',
    iconName: 'GraduationCap',
    tag: 'CAMPUS LIFE',
    image: imgWhyLingkungan,
    details: [
      'Kawasan asri, bersih, dan ramah anak (Anti-Bullying Zone)',
      'Fasilitas penunjang olahraga, seni, dan kreativitas',
      'Masjid representatif sebagai pusat pembinaan peradaban',
      'Keamanan 24 jam dengan sistem pengawasan menyeluruh'
    ]
  },
];

export const OUTCOMES_DATA: OutcomeItem[] = [
  {
    id: 'iman-akhlak',
    title: 'Iman & Akhlak',
    description: 'Remaja beriman kuat dan berakhlak mulia dalam kehidupan sehari-hari.',
    iconName: 'Sparkles',
  },
  {
    id: 'nalar-prestasi',
    title: 'Nalar & Prestasi',
    description: 'Remaja bernalar kritis, berprestasi akademik, dan berdaya saing.',
    iconName: 'Trophy',
  },
  {
    id: 'kepemimpinan-kemandirian',
    title: 'Kepemimpinan & Kemandirian',
    description: 'Remaja siap memimpin diri, berkolaborasi, dan mandiri dalam setiap tantangan.',
    iconName: 'Compass',
  },
  {
    id: 'karya-kebermanfaatan',
    title: 'Karya & Kebermanfaatan',
    description: 'Remaja berkarya nyata dan memberi manfaat bagi lingkungan dan masyarakat.',
    iconName: 'Leaf',
  },
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'tauhid-akhlak',
    title: 'Tauhid dan Akhlak',
    iconName: 'Shield',
  },
  {
    id: 'pendidikan-hati',
    title: 'Pendidikan Sepenuh Hati',
    iconName: 'HeartHandshake',
  },
  {
    id: 'sunda-islami',
    title: 'Karakter Sunda-Islami',
    iconName: 'Sun',
  },
  {
    id: 'kolaborasi-ortu',
    title: 'Kolaborasi Orang Tua',
    iconName: 'UsersRound',
  },
  {
    id: 'future-ready',
    title: 'Future-Ready Education',
    iconName: 'Lightbulb',
  },
  {
    id: 'sistem-mutu',
    title: 'Sistem Mutu Pendidikan',
    iconName: 'CheckCircle2',
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    grade: '1',
    title: 'Kelas 7',
    subtitle: 'Adaptasi & Fondasi',
    image: imgJourneyKelas7,
    items: [
      'Adab belajar',
      'Kemandirian',
      'Literasi & numerasi',
      'Kebiasaan ibadah'
    ],
    description: 'Fase transisi penting yang berfokus pada penanaman adab, adaptasi ritme belajar madrasah, kedisiplinan ibadah mandiri, serta penguatan literasi dasar.'
  },
  {
    grade: '2',
    title: 'Kelas 8',
    subtitle: 'Eksplorasi & Prestasi',
    image: imgJourneyKelas8,
    items: [
      'Project & organisasi',
      'Riset & eksperimen berkelanjutan',
      'Public speaking',
      'Kolaborasi tim'
    ],
    description: 'Fase pengasahan bakat, pendalaman riset sains, keaktifan organisasi kesiswaan, serta pembekalan kemampuan presentasi dan kolaborasi tim nyata.'
  },
  {
    grade: '3',
    title: 'Kelas 9',
    subtitle: 'Kontribusi & Kesiapan Masa Depan',
    image: imgJourneyKelas9,
    items: [
      'Kepemimpinan & life skills',
      'City survival',
      'Karya akhir',
      'Kesiapan ke MA/SMA'
    ],
    description: 'Fase pematangan kepemimpinan, pengujian survival di lapangan nyata, penyusunan karya tulis akhir, serta persiapan matang menuju jenjang SMA/MA unggulan.'
  },
];

export const ALL_PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'tahfidz',
    title: 'Tahfidz, Tilawah & Adab Harian',
    category: 'Spiritual & Adab',
    image: imgTahfidzQuran,
    description: 'Bimbingan intensif menghafal Al-Qur\'an dengan metode talaqqi bersanad, perbaikan makharijul huruf, dan penjiwaan adab Qurani dalam keseharian siswa.',
    highlights: [
      'Target hafalan terukur 3-5 Juz selama 3 tahun',
      'Tasmi\' hafalan berkala di hadapan orang tua',
      'Kajian tafsir tematik ayat-ayat remaja',
      'Pembiasaan wirid ma\'tsurat pagi dan petang'
    ],
    schedule: 'Setiap hari sebelum KBM (06.45 - 07.45)',
    outcomes: 'Siswa memiliki hafalan mutqin, bacaan tartil berkaidah tajwid, dan perilaku beradab.'
  },
  {
    id: 'pbl',
    title: 'Project Based Learning',
    category: 'Akademik & Inovasi',
    image: imgProjectLearning,
    description: 'Metode pembelajaran kontekstual di mana siswa memecahkan persoalan dunia nyata melalui riset, prototipe rekayasa, dan presentasi terbuka.',
    highlights: [
      'Pameran karya tahunan (EduFair & Exhibition)',
      'Integrasi lintas mata pelajaran (Sains, Seni, IPS)',
      'Mentoring langsung dari praktisi dan akademisi',
      'Pengembangan problem solving & design thinking'
    ],
    schedule: 'Blok tematik tengah semester dan akhir semester',
    outcomes: 'Siswa mampu menghasilkan karya inovatif yang solutif dan teruji.'
  },
  {
    id: 'riset-speaking',
    title: 'Riset, Literasi & Public Speaking',
    category: 'Literasi & Komunikasi',
    image: imgPublicSpeaking,
    description: 'Program akselerasi kemampuan bernalar kritis, penulisan karya tulis ilmiah remaja, debat argumen, dan kepercayaan diri berbicara di podium publik.',
    highlights: [
      'Klinik penulisan karya tulis ilmiah (KIR)',
      'Latihan pidato 3 bahasa (Indonesia, Arab, Inggris)',
      'Sidang karya akhir di hadapan dewan penguji',
      'Bedah buku bulanan dan jurnal literasi harian'
    ],
    schedule: 'Setiap pekan & sesi intensif kelas 8-9',
    outcomes: 'Siswa percaya diri tampil di panggung publik dan cakap berargumen secara santun dan ilmiah.'
  },
  {
    id: 'babakti-sepuh',
    title: 'Babakti ka Sepuh',
    category: 'Karakter & Budaya',
    image: imgBabaktiSepuh,
    description: 'Program kultural berbasis nilai luhur Sunda-Islami untuk menanamkan rasa hormat, khidmah, bakti, dan kehangatan hubungan anak kepada orang tua.',
    highlights: [
      'Sungkem dan dialog refleksi rasa syukur keluarga',
      'Tugas pekanan pelayanan mandiri untuk orang tua di rumah',
      'Bakti sosial ke panti werdha dan sesepuh masyarakat',
      'Penanaman tata krama, soméah, dan sopan santun Sunda'
    ],
    schedule: 'Agenda semesteran dan pembiasaan mingguan',
    outcomes: 'Remaja yang berhati lembut, taat kepada orang tua, dan menjunjung adab timur.'
  },
  {
    id: 'city-survival',
    title: 'City Survival / Life Skills',
    category: 'Life Skills & Kemandirian',
    image: imgCitySurvival,
    description: 'Tantangan petualangan edukatif di ruang publik kota tanpa gawai pribadi, di mana siswa mengelola anggaran minim, transportasi umum, dan navigasi tim.',
    highlights: [
      'Misi pencarian jejak dan observasi sosial',
      'Manajemen uang saku darurat dan kuliner halal',
      'Wawancara tokoh inspiratif dan masyarakat',
      'Pengujian ketahanan mental, kerja sama, dan etika publik'
    ],
    schedule: 'Program tahunan wajib siswa kelas 8 & 9',
    outcomes: 'Remaja yang tanggap situasi, mandiri, tidak mudah panik, dan piawai berkomunikasi.'
  },
  {
    id: 'leadership-camp',
    title: 'Outdoor Learning & Leadership Camp',
    category: 'Kepemimpinan Alam',
    image: imgLeadershipCamp,
    description: 'Kemah kepemimpinan di alam terbuka untuk memupuk kebersamaan ukhuwah, kepedulian lingkungan, mental juang, dan kepemimpinan visioner.',
    highlights: [
      'Tadabbur alam dan tahajud di alam bebas',
      'Simulasi kepemimpinan dan manajemen krisis tim',
      'Aksi konservasi alam dan penanaman pohon',
      'Pelatihan pertolongan pertama dan navigasi darat'
    ],
    schedule: '3 Hari 2 Malam di perkemahan pegunungan Jawa Barat',
    outcomes: 'Jiwa kepemimpinan yang berintegritas, tahan uji, dan berjiwa sosial tinggi.'
  },
  {
    id: 'olympiad-sains',
    title: 'Olympiad & Kompetisi Sains',
    category: 'Prestasi Sains & Olimpiade',
    image: imgProgOlympiad,
    description: 'Bimbingan intensif persiapan kompetisi sains madrasah (KSM), olimpiade sains nasional (OSN), dan kejuaraan matematika-IPA terpadu dengan pendampingan pakar.',
    highlights: [
      'Klub sains & matematika intensif bertaraf olimpiade',
      'Simulasi berkala pemecahan soal analitis tingkat tinggi',
      'Bimbingan langsung dosen & mentor spesialis juara',
      'Ajang kompetisi sains regional, nasional, dan internasional'
    ],
    schedule: 'Pekan pembinaan bakat dan karantina pra-lomba',
    outcomes: 'Siswa memiliki daya nalar tinggi dan siap bersaing meraih medali kejuaraan sains tingkat kota, provinsi, hingga nasional.'
  },
  {
    id: 'tahfidz-mtq',
    title: 'Tahfidz & MTQ',
    category: 'Tahfidz & Seni Tilawah',
    image: imgProgTahfidzMtq,
    description: 'Pengembangan seni baca Al-Qur\'an bertajwid indah (Musabaqah Tilawatil Qur\'an) serta halaqah muraja\'ah mendalam dan penguatan hafalan tartil.',
    highlights: [
      'Bimbingan tajwid & nagham maqamat tilawah berstandar MTQ',
      'Halaqah murajaah rutin dan pengujian hafalan terpadu',
      'Pelatihan mental tampil di mimbar MTQ dan syiar dakwah',
      'Integrasi adab penghafal Al-Qur\'an dalam kehidupan sehari-hari'
    ],
    schedule: 'Sesi ekstrakurikuler & bimbingan qari/qariah mingguan',
    outcomes: 'Mencetak qari dan hafizah remaja yang fasih, berjiwa Qur\'ani, dan berprestasi dalam ajang MTQ.'
  },
  {
    id: 'science-innovation',
    title: 'Science Project & Innovation',
    category: 'Riset & Rekayasa Teknologi',
    image: imgProgScienceInnovation,
    description: 'Wadah eksperimen rekayasa terapan, robotika sederhana, teknologi tepat guna, dan karya ilmiah remaja untuk melatih jiwa inventor muda.',
    highlights: [
      'Laboratorium inovasi dan perakitan model terapan',
      'Eksperimen energi terbarukan & teknologi ramah lingkungan',
      'Bimbingan penulisan paten dan karya ilmiah remaja (KIR)',
      'Pameran gelar karya inovasi sains tahunan di hadapan publik'
    ],
    schedule: 'Blok riset terjadwal dan workshop sains aplikatif',
    outcomes: 'Siswa terampil merancang prototipe inovatif dan berpikir solutif terhadap permasalahan sains teknologi.'
  },
  {
    id: 'social-service',
    title: 'Social Service & Community Project',
    category: 'Pengabdian & Kepedulian Sosial',
    image: imgProgSocialService,
    description: 'Aksi nyata kerelawanan, bakti sosial kemasyarakatan, kepanduan Pramuka peduli lingkungan, dan donasi kemanusiaan untuk memupuk empati sosial.',
    highlights: [
      'Bakti sosial dan santunan dhuafa berkala oleh siswa',
      'Proyek kepedulian lingkungan & bank sampah sekolah',
      'Gerakan Pramuka peduli bencana & kebersihan publik',
      'Edukasi kepekaan sosial dan filantropi Islam sejak dini'
    ],
    schedule: 'Agenda berkala semesteran & hari aksi sosial kemasyarakatan',
    outcomes: 'Remaja yang peka terhadap kondisi sosial sekitar, gemar menolong, dan memiliki jiwa kepemimpinan sosial.'
  },
  {
    id: 'arts-culture',
    title: 'Arts & Culture Achievement',
    category: 'Seni, Budaya & Prestasi',
    image: imgProgArtsCulture,
    description: 'Apresiasi seni rupa Islam, kaligrafi khat, musik islami/marawis/nasyid, seni budaya Sunda, serta kejuaraan minat bakat siswa.',
    highlights: [
      'Sanggar seni kaligrafi khat & seni budaya tradisional Sunda',
      'Klub musik religi, vokal nasyid, dan seni pertunjukan islami',
      'Pentas seni dan unjuk kabisa milad sekolah tahunan',
      'Partisipasi aktif dalam festival seni dan kebudayaan daerah'
    ],
    schedule: 'Eksplorasi minat bakat mingguan & pameran pentas karya',
    outcomes: 'Siswa memiliki kehalusan budi, kecintaan pada warisan budaya islami & daerah, serta penghargaan prestasi seni.'
  }
];

export const PROGRAMS_DATA: ProgramItem[] = ALL_PROGRAMS_DATA.slice(0, 6);
export const FEATURED_PROGRAMS_DATA: ProgramItem[] = PROGRAMS_DATA;

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'ruang-kelas',
    title: 'Ruang Kelas Nyaman',
    image: imgFacilityClassroom,
    description: 'Ruang kelas ber-AC dengan pencahayaan alami optimal, proyektor interaktif, dan layout meja modular yang mendukung diskusi kolaboratif.',
    capacity: '24-28 Siswa per kelas',
    features: ['AC & Sirkulasi Segar', 'Smart Projector / Display', 'Ergonomic Desk & Chair', 'Locker Pribadi Siswa']
  },
  {
    id: 'perpustakaan',
    title: 'Perpustakaan',
    image: imgFacilityLibrary,
    description: 'Pusat sumber belajar lengkap dengan ribuan koleksi buku referensi, novel sastra pilihan, ensiklopedia Islam, dan corner e-library digital.',
    capacity: '60 Siswa',
    features: ['Koleksi 5.000+ Buku', 'Akses E-Book & Jurnal', 'Reading Pod Santai', 'Ruang Diskusi Tertutup']
  },
  {
    id: 'laboratorium',
    title: 'Laboratorium',
    image: imgFacilityLab,
    description: 'Laboratorium IPA terpadu (Fisika, Biologi, Kimia) dan Lab Komputer modern untuk riset sains, coding, dan pengolahan data digital.',
    capacity: '32 Siswa',
    features: ['Mikroskop Digital & Alat Lab Standar', 'PC High-Spec & Internet Cepat', 'Safety Equipment Lengkap', 'Bahan Eksperimen Terjamin']
  },
  {
    id: 'masjid',
    title: 'Masjid / Mushola',
    image: imgFacilityMosque,
    description: 'Masjid megah dan bersih yang menjadi jantung kegiatan spiritual, tempat shalat berjamaah, halaqah Al-Qur\'an, dan pembinaan karakter ruhani.',
    capacity: '500+ Jamaah',
    features: ['Karpet Berkualitas & Bersih', 'Sound System Jernih', 'Tempat Wudhu Nyaman', 'Ruang Halaqah Khusus']
  },
  {
    id: 'olahraga',
    title: 'Area Olahraga',
    image: imgFacilitySports,
    description: 'Fasilitas olahraga multifungsi untuk basket, futsal, bulu tangkis, voli, dan panahan guna menjaga kebugaran dan sportivitas siswa.',
    capacity: '2 Lapangan Terpadu',
    features: ['Lapangan Basket & Futsal Vinyl', 'Area Memanah Standard', 'Tenis Meja & Bulutangkis', 'Ruang Ganti & Locker']
  },
  {
    id: 'kreativitas',
    title: 'Ruang Organisasi & Kreativitas',
    image: imgFacilityCreativity,
    description: 'Wadah bagi OSIS, ekstrakurikuler seni musik, robotik, teater, jurnalistik, dan karya kreatif untuk mengeksplorasi minat dan bakat remaja.',
    capacity: '40 Siswa',
    features: ['Alat Musik & Sound Editing', 'Perlengkapan Robotik & Arduino', 'Papan Strategi & Brainstorming', 'Pojok Karya Seni']
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'fajar',
    name: 'Bapak Fajar',
    role: 'ORANG TUA SISWA',
    quote: 'Kurikulum yang memadukan nilai agama dan akademik di MTs Asih Putera sangat membantu anak saya tumbuh menjadi pribadi yang santun namun tetap kritis dalam berpikir.',
    avatar: imgAvatarBapakFajar,
  },
  {
    id: 'rina',
    name: 'Ibu Rina',
    role: 'ORANG TUA SISWA',
    quote: 'Saya sangat mengapresiasi program pembiasaan adab dan tahfidz harian. Lingkungannya sangat positif dan mendukung perkembangan karakter remaja.',
    avatar: imgAvatarIbuRina,
  },
  {
    id: 'raihan',
    name: 'Raihan',
    role: 'SISWA KELAS 9',
    quote: 'Belajar di sini seru banget karena banyak proyek lapangan dan kegiatan leadership. Saya jadi lebih percaya diri untuk berbicara di depan umum.',
    avatar: imgAvatarRaihan,
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'open-house',
    date: '25 MEI 2026',
    day: '25',
    monthYear: 'MEI 2026',
    title: 'Open House & PPDB 2026/2027',
    excerpt: 'Kunjungi sekolah dan temukan pengalaman belajar terbaik untuk buah hati Anda. Sesi trial class, konsultasi kurikulum, dan beasiswa prestasi.',
    image: imgNewsOpenHouse,
    category: 'PPDB & Agenda',
    fullContent: 'MTs Asih Putera mengundang seluruh orang tua calon peserta didik untuk menghadiri acara Open House Akbar tahun ajaran 2026/2027. Pada acara ini, orang tua dan calon siswa dapat berkeliling melihat fasilitas modern, mengikuti mini workshop sains & seni, serta berdialog langsung dengan kepala madrasah dan guru pembimbing.'
  },
  {
    id: 'milad',
    date: '12 MEI 2026',
    day: '12',
    monthYear: 'MEI 2026',
    title: 'Semarak Milad Asih Putera',
    excerpt: 'Merayakan kebersamaan, prestasi, dan kontribusi untuk melangkah lebih maju dalam membina generasi rabbani berwawasan global.',
    image: imgNewsMilad,
    category: 'Peringatan & Seni',
    fullContent: 'Rangkaian perayaan milad MTs Asih Putera dimeriahkan dengan pagelaran seni budaya Sunda-Islami, expo proyek inovasi siswa, penyerahan penghargaan kepada siswa dan guru berprestasi, serta tabligh akbar dan santunan kaum dhuafa.'
  },
  {
    id: 'leadership-day',
    date: '03 MEI 2026',
    day: '03',
    monthYear: 'MEI 2026',
    title: 'Outdoor Leadership Day',
    excerpt: 'Belajar memimpin, bekerja sama, dan menikmati alam dalam ekspedisi kepemimpinan di kaki Gunung Tangkuban Parahu.',
    image: imgNewsLeadership,
    category: 'Kesiswaan & Outbound',
    fullContent: 'Kegiatan Outdoor Leadership Day membawa para siswa mengasah ketangguhan fisik dan mental melalui lintas alam, problem solving beregu, tadabbur keindahan ciptaan Allah SWT, dan penanaman 1.000 bibit pohon sebagai bentuk kepedulian ekologis.'
  },
];
