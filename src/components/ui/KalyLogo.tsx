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
  const heightMap = {
    sm: 'h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-20 sm:h-24',
  };

  const filterMap = {
    rose: '',
    dark: 'brightness-0',
    light: 'brightness-0 invert',
  };

  return (
    <img
      src="/images/logo-kaly.png"
      alt="Kaly Cosmetic’s"
      draggable={false}
      className={`w-auto select-none object-contain ${heightMap[size]} ${filterMap[tone]} ${className}`}
    />
  );
};
