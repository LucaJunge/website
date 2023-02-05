const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/**/*.{njk,md}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [],
}
