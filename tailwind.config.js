const defaultTheme = require('tailwindcss/defaultTheme')



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],

    },
    colors:{
      primary:"#7E33E0",
      "primary-light":"",
      "primary-dark":"#0DE43",
      secondary:"#FB2E86"
    },

  },
  plugins: [],
}
}
