import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kaly: {
          black: '#141312',
          topbar: '#C69592',
          ivory: '#FAF6F4',
          card: '#F7F6F5',
          blush: '#F7E3E0',
          vip: '#EBD7D4',
          rose: '#C69592',
          roseDark: '#A5726F',
          bronze: '#8C6B5D',
          taupe: '#6E6663',
          border: '#EAE3E0',
        },
      },
      fontFamily: {
        serif: ['"Montserrat"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.18em',
        wideNav: '0.14em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-in-right': 'slideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
