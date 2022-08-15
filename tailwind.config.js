/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#291507',
      },
      backgroundImage: {
        'hero-lg': 'url(/assets/HeroImagelg.png)',
        'hero-md': 'url(/assets/HeroImagemd.png)',
        'hero-sm': 'url(/assets/HeroImagesm.png)',
      },
      backgroundColor: {
        primary: '#291507',
        secondary: '#E3E1DC',
        accent: '#DEC68B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
