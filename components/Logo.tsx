import React from 'react';

interface LogoProps {
  className?: string;
  brandName: string;
  color?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', brandName, color = '#F092B0', textColor = 'currentColor' }) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
        style={{ backgroundColor: color }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 6h10M12 6v12a4 4 0 0 1-4 4" />
        </svg>
      </div>
      <span className="text-2xl font-black tracking-tighter" style={{ color: textColor }}>
        {brandName}
      </span>
    </div>
  );
};

export default Logo;
