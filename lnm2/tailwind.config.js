/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'glow-pulse-slow': 'glow 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-slide-up': 'fadeSlideUp 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'star-pulse': 'starPulse 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'grid-fade': 'grid-fade 3s ease-in-out infinite',
        'grid-move': 'grid-move 15s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeSlideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        starPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'grid-fade': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(32px)' },
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};
