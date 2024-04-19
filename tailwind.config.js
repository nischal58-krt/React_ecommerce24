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
  screens: {
    /* we should start with mobile. */
    sm: "576px", // mobile landscape mode
    md: "768px", // tablet
    lg: "1024px", // latptop without side numerical in keypad
    xl: "1200px", // normal desktop
    xxl: "1400", // huge monitor
    xl: "1280px", // normal desktop
    xxl: "1400px", // huge monitor
  },
}
}
