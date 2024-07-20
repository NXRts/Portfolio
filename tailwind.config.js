/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '110px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}

