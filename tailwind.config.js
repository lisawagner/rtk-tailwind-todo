/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxs': '540px',
        // => @media (min-width: 540px) { ... }
      },   
    },

  },
  plugins: [],
}