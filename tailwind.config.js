/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        purple: {
          400: '#a78bfa',
          500: '#a855f7',
          600: '#9333ea',
          900: '#581c87',
        },
        pink: {
          500: '#ec4899',
          600: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, .05) 25%, rgba(168, 85, 247, .05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .05) 75%, rgba(168, 85, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, .05) 25%, rgba(168, 85, 247, .05) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, .05) 75%, rgba(168, 85, 247, .05) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'gradient-1': 'gradient-1 12s ease-in-out infinite alternate',
        'gradient-2': 'gradient-2 12s ease-in-out infinite alternate',
        'gradient-3': 'gradient-3 12s ease-in-out infinite alternate',
        'gradient-4': 'gradient-4 12s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-1': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.5' },
          '50%': { transform: 'translate(100px, -100px)', opacity: '0.8' },
        },
        'gradient-2': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.5' },
          '50%': { transform: 'translate(-100px, 100px)', opacity: '0.8' },
        },
        'gradient-3': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.5' },
          '50%': { transform: 'translate(100px, 100px)', opacity: '0.8' },
        },
        'gradient-4': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.5' },
          '50%': { transform: 'translate(-100px, -100px)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
