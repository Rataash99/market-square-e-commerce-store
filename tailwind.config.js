/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        levitate : 'levitate 3s ease-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        levitate : {
          '50%':{
            transform: 'translateY(40px)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }
    },
  },
  plugins: [],
}
