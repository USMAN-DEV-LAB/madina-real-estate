/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A47', // main dark hero / header background
          dark: '#0A1E36',
          light: '#16345A',
        },
        gold: {
          DEFAULT: '#D9A62E', // logo / accent / active tab
          light: '#F4E3B0',
        },
        brandgreen: {
          DEFAULT: '#1BA24E', // FIND / action button
          dark: '#158A41',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
