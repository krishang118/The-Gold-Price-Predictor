/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Myriad Set'],
      },
    },
  },
  plugins: [],
};
