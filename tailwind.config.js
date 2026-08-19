/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0c0c0f',
          850: '#101013',
          800: '#141418',
          700: '#1c1c22',
          600: '#26262e',
          500: '#34343e',
          400: '#4a4a57',
          300: '#6b6b7a',
          200: '#9a9aab',
          100: '#c9c9d4',
        },
        ember: {
          50: '#fff5ed',
          100: '#ffe8d3',
          200: '#ffceaa',
          300: '#ffac75',
          400: '#ff7d3b',
          500: '#ff5a1f',
          600: '#f23e0a',
          700: '#c92d08',
          800: '#9f260e',
          900: '#7e230f',
        },
        crimson: {
          500: '#e11d2a',
          600: '#c41726',
          700: '#a3121f',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255,90,31,0.45)',
        'glow-sm': '0 0 22px -6px rgba(255,90,31,0.35)',
        card: '0 24px 60px -20px rgba(0,0,0,0.7)',
        'card-hover': '0 40px 80px -24px rgba(0,0,0,0.8)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'slide-down': 'slide-down 0.3s ease both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
