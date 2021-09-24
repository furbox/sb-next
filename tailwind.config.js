module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#082032',
        'dark-gray': '#2C394B',
        'dark-light': '#334756',
        'dark-orange': '#FF4C29',
        'light-gray': '#DDDDDD'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
