import React from 'react';

interface KalyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'rose' | 'dark' | 'light';
}

export const KalyLogo: React.FC<KalyLogoProps> = ({
  className = '',
  size = 'md',
  tone = 'rose',
}) => {
  const colorMap = {
    rose: '#B58681',
    dark: '#141312',
    light: '#FAF7F5',
  };

  const scaleMap = {
    sm: { main: 'text-xl tracking-[0.26em]', sub: 'text-[8px] tracking-[0.34em]', line: 'w-4' },
    md: { main: 'text-2xl sm:text-[27px] tracking-[0.28em]', sub: 'text-[9px] tracking-[0.36em]', line: 'w-5' },
    lg: { main: 'text-4xl tracking-[0.3em]', sub: 'text-[11px] tracking-[0.38em]', line: 'w-8' },
  };

  const color = colorMap[tone];
  const dims = scaleMap[size];

  return (
    <div
      className={`inline-flex flex-col items-center select-none leading-none ${className}`}
      style={{ color }}
      aria-label="Kaly Cosmetic's"
    >
      <div className={`flex items-center font-sans font-light ${dims.main}`}>
        <span>K</span>
        <span className="relative inline-flex items-center justify-center">
          <span>A</span>
          <svg
            viewBox="0 0 16 16"
            className="pointer-events-none absolute -ml-[0.28em] mt-[0.22em] h-[0.34em] w-[0.34em]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0L9.7 6.3L16 8L9.7 9.7L8 16L6.3 9.7L0 8L6.3 6.3L8 0Z" />
          </svg>
        </span>
        <span>L</span>
        <span className="-mr-[0.28em]">Y</span>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <span className={`h-[1px] opacity-60 ${dims.line}`} style={{ backgroundColor: color }} />
        <span className={`font-sans font-normal uppercase ${dims.sub}`}>
          COSMETIC’S
        </span>
        <span className={`h-[1px] opacity-60 ${dims.line}`} style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};
