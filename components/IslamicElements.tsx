import React from 'react';

/**
 * Islamic Ornamental Divider with central 8-pointed star motif & floral arabesque flourishes.
 */
export const IslamicOrnamentalDivider: React.FC<{ className?: string; color?: string }> = ({
  className = 'my-3.5',
  color = '#0a4b2f',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      {/* Left tapered flourish */}
      <svg
        className="w-24 sm:w-36 h-3 text-[#0a4b2f]/40 hidden xs:block"
        viewBox="0 0 140 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6 H100 M100 6 C110 6 115 2 122 2 C129 2 135 6 140 6 M100 6 C110 6 115 10 122 10 C129 10 135 6 140 6"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="122" cy="6" r="1.5" fill="#c89635" />
      </svg>

      {/* Central 8-Pointed Star (Khatim / Rub el Hizb) */}
      <div className="relative flex items-center justify-center">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer diamond 1 */}
          <rect
            x="6"
            y="6"
            width="20"
            height="20"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="#fcfbf7"
          />
          {/* Outer diamond 2 rotated 45 deg */}
          <rect
            x="6"
            y="6"
            width="20"
            height="20"
            rx="1.5"
            transform="rotate(45 16 16)"
            stroke={color}
            strokeWidth="1.2"
            fill="#fcfbf7"
          />
          {/* Inner Golden Center Circle & Crescent/Star */}
          <circle cx="16" cy="16" r="4.5" fill="#c89635" fillOpacity="0.18" stroke="#c89635" strokeWidth="0.9" />
          <circle cx="16" cy="16" r="1.8" fill="#c89635" />
        </svg>
      </div>

      {/* Right tapered flourish */}
      <svg
        className="w-24 sm:w-36 h-3 text-[#0a4b2f]/40 hidden xs:block"
        viewBox="0 0 140 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M140 6 H40 M40 6 C30 6 25 2 18 2 C11 2 5 6 0 6 M40 6 C30 6 25 10 18 10 C11 10 5 6 0 6"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="18" cy="6" r="1.5" fill="#c89635" />
      </svg>
    </div>
  );
};

/**
 * Full Section Canvas Islamic Watermark Pattern
 * Rich, clear, and elegant multi-layered Islamic Girih geometric pattern
 */
export const IslamicCanvasWatermark: React.FC<{ opacityClass?: string; colorClass?: string }> = ({
  opacityClass = 'opacity-[0.065]',
  colorClass = 'text-[#0a4b2f]',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${opacityClass} ${colorClass} overflow-hidden`}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="islamic-canvas-girih-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Center Arabesque medallion with gold outer ring */}
            <circle cx="40" cy="40" r="14" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#c89635" strokeWidth="0.8" strokeDasharray="2 1.5" />
            <circle cx="40" cy="40" r="3" fill="#c89635" />

            {/* Primary 8-point Khatim / Rub-el-Hizb Star Lattice */}
            <path
              d="M40 8 L46 22 L60 22 L49 31 L54 45 L40 37 L26 45 L31 31 L20 22 L34 22 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            {/* Inverted Interlocking 8-point Star Ribbon */}
            <path
              d="M40 72 L46 58 L60 58 L49 49 L54 35 L40 43 L26 35 L31 49 L20 58 L34 58 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            {/* Secondary Interlocking Girih ribbons radiating outward */}
            <path
              d="M0 40 L16 48 L16 64 L28 52 L40 60 L32 40 L40 20 L28 28 L16 16 L16 32 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M80 40 L64 48 L64 64 L52 52 L40 60 L48 40 L40 20 L52 28 L64 16 L64 32 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M40 0 L48 16 L64 16 L52 28 L60 40 L40 32 L20 40 L28 28 L16 16 L32 16 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M40 80 L48 64 L64 64 L52 52 L60 40 L40 48 L20 40 L28 52 L16 64 L32 64 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* 4 Corner Medallions with Gold Rings */}
            <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="0" cy="0" r="4" fill="#c89635" fillOpacity="0.7" />
            <circle cx="80" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="80" cy="0" r="4" fill="#c89635" fillOpacity="0.7" />
            <circle cx="0" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="0" cy="80" r="4" fill="#c89635" fillOpacity="0.7" />
            <circle cx="80" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="0.9" />
            <circle cx="80" cy="80" r="4" fill="#c89635" fillOpacity="0.7" />

            {/* Connecting Diagonal Filigree Lines with Soft Gold Dashes */}
            <line x1="0" y1="0" x2="80" y2="80" stroke="#c89635" strokeWidth="0.7" strokeDasharray="3 3" />
            <line x1="80" y1="0" x2="0" y2="80" stroke="#c89635" strokeWidth="0.7" strokeDasharray="3 3" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" strokeDasharray="4 4" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" strokeDasharray="4 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-canvas-girih-pattern)" />
      </svg>
    </div>
  );
};

/**
 * Islamic Manuscript Illumination Corner (Tazhib) Flourish
 */
export const TazhibCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 rotate-90';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-180';
      case 'bottom-left':
        return 'bottom-0 left-0 -rotate-90';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <div
      className={`absolute w-14 h-14 sm:w-18 sm:h-18 pointer-events-none z-10 ${getTransform()} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer manuscript border lines */}
        <path d="M0 12 H42 C54 12 62 20 62 32 V80" stroke="#0a4b2f" strokeWidth="1.2" strokeOpacity="0.35" />
        <path d="M0 6 H48 C62 6 74 18 74 32 V80" stroke="#c89635" strokeWidth="0.9" strokeOpacity="0.45" strokeDasharray="3 2" />
        <path d="M0 18 H36 C44 18 50 24 50 32 V80" stroke="#0a4b2f" strokeWidth="0.8" strokeOpacity="0.25" />

        {/* Intricate Tazhib Corner Arabesque curves */}
        <path
          d="M0 0 L24 24 M12 0 C12 16 16 20 32 20 M0 12 C16 12 20 16 20 32"
          stroke="#0a4b2f"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
        <path
          d="M6 6 C18 10 24 16 28 28 C16 24 10 18 6 6 Z"
          fill="#c89635"
          fillOpacity="0.15"
          stroke="#c89635"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Miniature corner rosettes / jewels */}
        <circle cx="28" cy="28" r="2.2" fill="#0a4b2f" fillOpacity="0.7" />
        <circle cx="28" cy="28" r="4" stroke="#c89635" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="16" cy="6" r="1.5" fill="#c89635" fillOpacity="0.7" />
        <circle cx="6" cy="16" r="1.5" fill="#c89635" fillOpacity="0.7" />
        <circle cx="42" cy="12" r="1.2" fill="#0a4b2f" fillOpacity="0.6" />
        <circle cx="12" cy="42" r="1.2" fill="#0a4b2f" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * Small Symmetric Islamic Geometric Header Medallion
 */
export const IslamicHeaderMedallion: React.FC<{ isFlipped?: boolean; className?: string }> = ({
  isFlipped = false,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[#0a4b2f] ${isFlipped ? 'flex-row-reverse' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Tapered line */}
      <svg className="w-8 sm:w-14 h-2 text-[#0a4b2f]/35" viewBox="0 0 60 8" fill="none">
        <path
          d={isFlipped ? "M0 4 H50 M50 4 C55 2 58 4 60 4" : "M60 4 H10 M10 4 C5 2 2 4 0 4"}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx={isFlipped ? 52 : 8} cy="4" r="1.2" fill="#c89635" />
      </svg>

      {/* 8-pointed star rosette */}
      <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="#faf8f2" />
        <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" stroke="#c89635" strokeWidth="1.1" fill="none" />
        <circle cx="12" cy="12" r="2.5" fill="#c89635" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="1" fill="#0a4b2f" />
      </svg>
    </div>
  );
};

/**
 * Large Mosque Dome & Minaret Silhouette Watermark Overlay
 */
export const MosqueSilhouetteWatermark: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div
      className={`absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden select-none opacity-[0.045] text-[#0a4b2f] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[380px] sm:w-[520px] md:w-[680px] lg:w-[820px] h-auto translate-x-1/6 md:translate-x-1/8"
      >
        {/* Distant Mosque silhouette skyline */}
        {/* Main Central Grand Dome */}
        <path d="M260 220 C260 140 330 90 350 40 C370 90 440 140 440 220 V380 H260 V220 Z" />
        {/* Dome Crescent and Star Finial */}
        <path d="M348 10 V40 M352 10 V40 M345 20 H355" stroke="currentColor" strokeWidth="3" />
        <circle cx="350" cy="10" r="7" />
        
        {/* Left Secondary Dome */}
        <path d="M170 260 C170 200 220 170 235 130 C250 170 300 200 300 260 V380 H170 V260 Z" opacity="0.85" />
        <circle cx="235" cy="120" r="4" />
        
        {/* Right Secondary Dome */}
        <path d="M400 260 C400 200 450 170 465 130 C480 170 530 200 530 260 V380 H400 V260 Z" opacity="0.85" />
        <circle cx="465" cy="120" r="4" />

        {/* Tall Left Minaret with Balconies */}
        <path d="M120 100 L125 380 H155 L160 100 H120 Z" />
        <path d="M110 180 H170 V195 H110 Z" />
        <path d="M115 110 H165 V125 H115 Z" />
        <path d="M120 100 C120 70 140 50 140 30 C140 50 160 70 160 100 H120 Z" />
        <path d="M140 10 V30" stroke="currentColor" strokeWidth="2" />
        <circle cx="140" cy="10" r="3" />

        {/* Tall Right Minaret with Balconies */}
        <path d="M540 100 L545 380 H575 L580 100 H540 Z" />
        <path d="M530 180 H590 V195 H530 Z" />
        <path d="M535 110 H585 V125 H535 Z" />
        <path d="M540 100 C540 70 560 50 560 30 C560 50 580 70 580 100 H540 Z" />
        <path d="M560 100 V30" stroke="currentColor" strokeWidth="2" />
        <circle cx="560" cy="10" r="3" />

        {/* Base Arches & Pillars Colonnade */}
        <path d="M80 380 H600 V460 H80 Z" />
        {/* Multiple Arched Windows */}
        <path d="M280 280 C280 250 300 240 310 240 C320 240 340 250 340 280 V340 H280 V280 Z" fill="#faf9f5" />
        <path d="M360 280 C360 250 380 240 390 240 C400 240 420 250 420 280 V340 H360 V280 Z" fill="#faf9f5" />
        <path d="M190 300 C190 280 205 270 215 270 C225 270 240 280 240 300 V340 H190 V300 Z" fill="#faf9f5" />
        <path d="M460 300 C460 280 475 270 485 270 C495 270 510 280 510 300 V340 H460 V300 Z" fill="#faf9f5" />
      </svg>
    </div>
  );
};

/**
 * Compact Islamic Filigree (Tazhib) Corner for Program and Activity Cards
 */
export const TazhibCompactCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
  accentColor?: string;
}> = ({
  position = 'top-left',
  className = '',
  color = '#0a4b2f',
  accentColor = '#c89635',
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 rotate-90';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-180';
      case 'bottom-left':
        return 'bottom-0 left-0 -rotate-90';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <div
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10 ${getPositionClass()} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer corner frame line */}
        <path
          d="M0 6 H18 C26 6 34 14 34 22 V40"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        {/* Inner gold accent curve */}
        <path
          d="M0 12 H14 C20 12 28 20 28 26 V40"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.6"
          strokeDasharray="2 1.5"
        />
        {/* Delicate arabesque corner petal */}
        <path
          d="M0 0 L12 12 M6 0 C6 8 8 10 16 10 M0 6 C8 6 10 8 10 16"
          stroke={color}
          strokeWidth="1.1"
          strokeOpacity="0.6"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="1.5" fill={accentColor} fillOpacity="0.85" />
      </svg>
    </div>
  );
};

/**
 * Section Divider Filigree Line with central 8-pointed star & Islamic arabesque ribbons
 */
export const SectionDividerFiligree: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-8 py-2 relative flex items-center justify-center overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="w-full flex items-center justify-center gap-2 sm:gap-4">
        {/* Left filigree line with gold dash */}
        <div className="flex-1 h-[1px] bg-linear-to-r from-transparent via-[#0a4b2f]/25 to-[#c89635]/60 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border border-[#c89635] bg-[#faf9f5]"></div>
        </div>

        {/* Center 8-pointed Star Medallion */}
        <div className="flex items-center gap-1.5 shrink-0 px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c89635]/80"></span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0a4b2f]" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="#faf9f5" />
            <rect x="4" y="4" width="16" height="16" rx="1.5" transform="rotate(45 12 12)" stroke="#c89635" strokeWidth="1.1" fill="none" />
            <circle cx="12" cy="12" r="2.5" fill="#c89635" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="12" cy="12" r="1.2" fill="#0a4b2f" />
          </svg>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c89635]/80"></span>
        </div>

        {/* Right filigree line with gold dash */}
        <div className="flex-1 h-[1px] bg-linear-to-l from-transparent via-[#0a4b2f]/25 to-[#c89635]/60 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border border-[#c89635] bg-[#faf9f5]"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Islamic Arched Mihrab Silhouette Watermark (Left or Right margin)
 */
export const ArchSilhouetteWatermark: React.FC<{
  position?: 'left' | 'right';
  className?: string;
}> = ({ position = 'left', className = '' }) => {
  return (
    <div
      className={`absolute ${position === 'left' ? 'left-0 -translate-x-1/8' : 'right-0 translate-x-1/8'} top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden select-none opacity-[0.04] text-[#0a4b2f] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 600"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] sm:w-[380px] md:w-[480px] h-auto"
      >
        {/* Triple-cusped Islamic Moorish/Mihrab Arch */}
        <path
          d="M60 580 V240 C60 160 140 100 200 40 C260 100 340 160 340 240 V580"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M90 580 V260 C90 190 150 140 200 90 C250 140 310 190 310 260 V580"
          strokeWidth="3"
          strokeDasharray="8 6"
          stroke="#c89635"
        />
        <path
          d="M120 580 V280 C120 220 160 180 200 140 C240 180 280 220 280 280 V580"
          strokeWidth="2"
        />
        {/* Hanging Lantern (Qandeel) Silhouette inside Mihrab */}
        <path d="M200 40 V150" strokeWidth="2.5" stroke="#c89635" />
        <path d="M185 150 C185 150 200 135 200 135 C200 135 215 150 215 150 V165 H185 V150 Z" strokeWidth="2" fill="currentColor" />
        <path d="M185 165 L175 220 L200 250 L225 220 L215 165 H185 Z" strokeWidth="3" />
        <circle cx="200" cy="205" r="10" fill="#c89635" />
        <path d="M200 250 V275" strokeWidth="3" stroke="#c89635" />
        <circle cx="200" cy="285" r="5" fill="#c89635" />
      </svg>
    </div>
  );
};


