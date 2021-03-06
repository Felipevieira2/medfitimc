module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
         'whatsapp-color': '#25d334'
      }),
      backgroundImage: theme => ({
        'hero-pattern': "url('/imgs/imc.jpg')",
        'footer-texture': "url('/img/imc.jpg')",
      }),
      padding: { "fluid-video": "56.25%" } 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
