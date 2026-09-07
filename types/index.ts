export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  tag: string;
  details?: string[];
}

export interface OutcomeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PillarItem {
  id: string;
  title: string;
  iconName: string;
}

export interface JourneyStage {
  grade: string;
  title: string;
  subtitle: string;
  image: string;
  items: string[];
  description?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  highlights: string[];
  schedule?: string;
  outcomes?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  image: string;
  description: string;
  capacity?: string;
  features?: string[];
}

export interface TestimonialItem {
  id: string | number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  tag?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  day: string;
  monthYear: string;
  title: string;
  excerpt: string;
  fullContent?: string;
  image: string;
  category: string;
}

export interface PpdbFormData {
  fullName: string;
  email: string;
  phone: string;
  gender: 'Laki-laki' | 'Perempuan';
  previousSchool: string;
  entryYear: string;
  pathway: 'Reguler' | 'Tahfidz Al-Qur\'an' | 'Prestasi Akademik' | 'Prestasi Seni & Olahraga';
  notes: string;
}

export interface VisitFormData {
  parentName: string;
  studentName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  numberOfAttendees: number;
  interest: string;
}
