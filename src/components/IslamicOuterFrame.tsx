import React from 'react';

interface IslamicOuterFrameProps {
  children: React.ReactNode;
}

export const IslamicOuterFrame: React.FC<IslamicOuterFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#faf9f5] text-[#1e293b] relative selection:bg-[#0f5434] selection:text-white flex flex-col">
      {/* Subtle continuous Islamic geometric watermark across the canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] text-[#0a4b2f] z-0 overflow-hidden" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="inner-frame-islamic-linework-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* 8-point Khatim Star Ribbon */}
              <path
                d="M40 8 L46 22 L60 22 L49 31 L54 45 L40 37 L26 45 L31 31 L20 22 L34 22 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M40 72 L46 58 L60 58 L49 49 L54 35 L40 43 L26 35 L31 49 L20 58 L34 58 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="40" cy="40" r="12" fill="none" stroke="#c89635" strokeWidth="0.8" strokeDasharray="3 2" />
              <circle cx="40" cy="40" r="3" fill="#c89635" />
              <line x1="0" y1="0" x2="80" y2="80" stroke="#c89635" strokeWidth="0.6" strokeDasharray="3 3" />
              <line x1="80" y1="0" x2="0" y2="80" stroke="#c89635" strokeWidth="0.6" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#inner-frame-islamic-linework-pattern)" />
        </svg>
      </div>

      <div className="relative z-1 flex flex-col flex-1 w-full">
        {children}
      </div>
    </div>
  );
};

