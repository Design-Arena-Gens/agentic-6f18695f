/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#DCEEFF',
          200: '#B9DBFF',
          300: '#8ABFFF',
          400: '#5AA2FF',
          500: '#2B85FF',
          600: '#1468DB',
          700: '#0E50A8',
          800: '#0A3A78',
          900: '#07264F'
        }
      }
    },
  },
  plugins: [],
}
