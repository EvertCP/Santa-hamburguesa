/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'halloween-orange': '#ff7b25',
          'halloween-purple': '#6a0dad',
        },
        fontFamily: {
          'creepster': ['Creepster', 'cursive'],
          'above-beyond': ['Dancing Script', 'cursive'],
          'bbh-sans': ['BBH Sans Bogle', 'sans-serif'],
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
          'pulse-slow': 'pulse 3s infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  }