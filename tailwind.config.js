/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: '#291507',
        textLight: '#FFFFFF',
      },
      backgroundImage: {
        'hero-lg': 'url(/assets/HeroImagelg.png)',
        'hero-md': 'url(/assets/HeroImagemd.png)',
        'hero-sm': 'url(/assets/HeroImagesm.png)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
