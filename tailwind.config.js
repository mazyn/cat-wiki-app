/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#291507',
        accent: '#DEC68B',
      },
      backgroundImage: {
        'hero-lg': 'url(/assets/images/HeroImagelg.png)',
        'hero-md': 'url(/assets/images/HeroImagemd.png)',
        'hero-sm': 'url(/assets/images/HeroImagesm.png)',
      },
      backgroundColor: {
        primary: '#291507',
        secondary: '#E3E1DC',
        accent: '#DEC68B',
        indicator: '#544439',
        indicatorGray: '#E0E0E0',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
