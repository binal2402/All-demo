const colors = require('tailwindcss/colors');
module.exports = {
  content: ['src/**/*.js','src/**/*.jsx','src/**/*.ts','src/**/*.tsx','public/**/*.html'],
  theme: {
    extend: {
      colors:{
        blue:colors.lightBlue,
        gray:colors.trueGray,
      }
    },
  },
  plugins: [],
}
