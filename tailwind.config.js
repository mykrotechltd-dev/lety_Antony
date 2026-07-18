/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#d1ece8',
          200: '#a3dcd5',
          300: '#2d5f52',
          400: '#1e4a3f',
          500: '#0f3a2f',
          600: '#0a2a23',
          700: '#062016',
          800: '#041610',
          900: '#020a08',
        },
        secondary: {
          50: '#faf9f6',
          100: '#f2ede5',
          200: '#e0d5c8',
          300: '#14a38f',
          400: '#0d7a6f',
          500: '#055245',
          600: '#032a28',
          700: '#001512',
        },
        accent: '#16a34a',
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
