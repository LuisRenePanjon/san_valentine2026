/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors: {
        'valentine-pink': '#FF6B9D',
        'valentine-light': '#FFC2D4',
        'valentine-red': '#FF1744',
      },
      animation: {
        'rainbow-glow': 'rainbow-glow 3s ease infinite',
      },
      keyframes: {
        'rainbow-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' },
          '33%': { filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.8))' },
          '66%': { filter: 'drop-shadow(0 0 20px rgba(255, 23, 68, 0.8))' },
        },
      },
    },
  },
  plugins: [],
}


