/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        quran: {
          primary: '#00565E',
          secondary: '#63E7AB',
          tertiary: '#D4EAFF',
          white: '#ffffff',
        },
        card: {
          primary: '#FFC9C4',
          secondary: '#053F71',
          tertiary: '#CCE6FF',
          fourth: '#FFF2C0',
        },
      },
    },
  },
};
