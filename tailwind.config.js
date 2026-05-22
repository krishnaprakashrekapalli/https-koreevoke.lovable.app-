/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome black palette (Gymkha-style)
        primary: '#000000',
        surface: '#0a0a0a',
        elevated: '#141414',
        line: '#1f1f1f',
        muted: '#9a9a9a',
        accent: '#ffffff',
        brand: '#ff2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Anton"', '"Bebas Neue"', 'Impact', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
