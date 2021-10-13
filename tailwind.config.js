module.exports = {
  jit:true,
  purge: [
    "docs/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  //tailwindcss/plugin

}
