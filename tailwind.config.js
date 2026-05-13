/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F7F4EE',
          dark: '#EDE8DF',
        },
        ink: {
          DEFAULT: '#1C1A17',
          light: '#5C5850',
          faint: '#9A9289',
        },
        sage: {
          DEFAULT: '#4A7C59',
          light: '#E8F0EA',
        },
        accent: '#C17B3A',
        'warm-border': '#D8D2C6',
        'card-bg': '#FDFBF8',
      },
    },
  },
  plugins: [],
};
