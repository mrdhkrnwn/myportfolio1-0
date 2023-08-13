/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        primary: '#67e8f9',
        dark: "#0891b2",
        paragraf: "#e5e7eb",
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

