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
        'dark-primary': '#1A1A1D',
        'dark-secondary': '#252529',
        'accent': '#C5A880',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
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