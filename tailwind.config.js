/**
 * Hallo semua, projek ini saya buat untuk latihan TailwindCSS
 * Saya menggunakan TailwindCSS versi 3.0.24
 * Saya membuat ini untuk Portfolio saya, 
 * 
 * 
 * @NXRts
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '40px'
    },
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

