/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lions: {
          blue: '#003366',
          navy: '#0B1B3D',
          dark: '#071126',
          gold: '#C5A059',
          goldLight: '#E5C378',
          goldDark: '#9E7A30',
          accent: '#0284C7',
          grayBg: '#F8FAFC',
          surface: '#F1F5F9'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
