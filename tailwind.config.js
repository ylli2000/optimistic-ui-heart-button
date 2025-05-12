/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'heart-bubble': {
          '0%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '10%': { transform: 'scale(1.3) translateY(-6px)', opacity: '0.3' },
          '100%': { transform: 'scale(1) translateY(-12px)', opacity: '0' },
        },
      },
      animation: {
        'heart-bubble': 'heart-bubble 0.6s',
      },
    },
  },
  plugins: [],
}; 