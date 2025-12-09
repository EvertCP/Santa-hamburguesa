/** @type {import('tailwindcss').Config} */
// Configuración navideña
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'christmas-red': '#C41E3A',
        'christmas-green': '#165B33',
        'christmas-gold': '#FFD700',
        'christmas-dark-red': '#8B0000',
        'christmas-cream': '#FFF8E7',
      },
      fontFamily: {
        'mountains': ['Cinzel', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'bbh-sans': ['BBH Sans Bogle', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'lock-reveal': 'lock-reveal 3s forwards ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'lock-reveal': {
          '0%': { maskSize: '50px', WebkitMaskSize: '50px' },
          '100%': { maskSize: '1000vh', WebkitMaskSize: '1000vh' },
        },
      },
    },
  },
  plugins: [],
}