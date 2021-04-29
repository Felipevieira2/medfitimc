module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('/imgs/imc.jpg')",
       'footer-texture': "url('/imgs/imc.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
