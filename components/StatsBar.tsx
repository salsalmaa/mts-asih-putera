import React from 'react';
import {
  Calendar,
  GraduationCap,
  Users,
  Building2,
  Medal,
  ShieldCheck
} from 'lucide-react';
import { STATS_DATA } from '../data/schoolData';
import { IslamicCanvasWatermark } from './IslamicElements';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      case 'Users':
        return <Users className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      case 'Building2':
        return <Building2 className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      case 'Medal':
        return <Medal className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4.5 h-4.5 text-[#0a4b2f]" />;
      default:
        return <Building2 className="w-4.5 h-4.5 text-[#0a4b2f]" />;
    }
  };

  return (
    <section className="w-full bg-[#f6f3e9] py-7 border-b border-[#ece6d5] relative overflow-hidden">
      {/* Background Watermark */}
      <IslamicCanvasWatermark opacityClass="opacity-[0.065]" colorClass="text-[#0a4b2f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-between">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-3.5"
            >
              <div className="relative w-10 h-10 rounded-xl border border-[#c89635]/50 flex items-center justify-center shrink-0 bg-white/80 shadow-2xs">
                {/* Subtle corner diamond rosettes */}
                <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-[#c89635] rotate-45"></span>
                <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-[#c89635] rotate-45"></span>
                {getIcon(stat.iconName)}
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-sans font-bold text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] text-[#0a4b2f] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold text-[#1a4430] uppercase tracking-wider leading-tight mt-1.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

