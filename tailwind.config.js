/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'podkova': ['Podkova', 'serif'],
      },
      colors: {
        'blue': '#1E90FF',
        'light-blue': '#A2E0FF',
        'bright-blue': '#EBF0F4',
        'light-red': '#FFA1A1',
        'lighter-gray': '#EDEDED',
        'light-gray-1': ' #F1F1F1',    
        'light-gray': '#808080'
      }
    },
  },
  plugins: [],
};
