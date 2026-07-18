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
        // Warm ivory / bone surfaces — the atelier's paper
        ivory: '#faf7f1',
        bone: '#f4efe6',
        // Warm near-black ink — body text & deep grounds
        ink: '#211b16',
        // Deep emerald (carried from the brand deck) — primary
        primary: {
          50: '#f1f6f3',
          100: '#dcebe4',
          200: '#b6d3c5',
          300: '#84b19d',
          400: '#4c8571',
          500: '#155e49',
          600: '#0f4838',
          700: '#0c3729',
          800: '#0a291f',
          900: '#071a13',
        },
        // Champagne / antique gold — couture accent (beadwork, ankara gold)
        accent: '#b0894e',
        gold: {
          light: '#cdae78',
          DEFAULT: '#b0894e',
          deep: '#8f6c38',
        },
        // Oxblood / wine — jewel secondary (from the garments)
        wine: '#5a2333',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s ease both',
      },
    },
  },
  plugins: [],
}
