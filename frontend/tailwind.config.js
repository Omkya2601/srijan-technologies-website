/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dbedff',
          200: '#b3d9ff',
          300: '#75baff',
          400: '#2e96ff',
          500: '#006edb',
          600: '#0059b3',
          700: '#00478f',
          800: '#00366b',
          900: '#00264d',
          950: '#00172e',
        },
        accent: {
          400: '#fdb84a',
          500: '#fc9e13',
          600: '#d97f06',
        },
        ink: {
          50: '#f6f7fb',
          100: '#eceef5',
          200: '#d7dbe8',
          300: '#b3bad0',
          400: '#8890ac',
          500: '#666e8d',
          600: '#4f5570',
          700: '#3d4159',
          800: '#282b3d',
          900: '#151722',
          950: '#0b0c14',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cal Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(15 23 42 / 0.08), 0 12px 32px -12px rgb(15 23 42 / 0.12)',
        glow: '0 0 0 1px rgb(0 110 219 / 0.1), 0 8px 30px -8px rgb(0 110 219 / 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
