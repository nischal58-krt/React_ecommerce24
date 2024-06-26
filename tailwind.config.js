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
      "primary-light":"#E7E6EF",
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
    xl: "1280px", // normal desk
    xxl: "1400px", // huge monitor
  },
  backgroundImage:{
    'banner-1':"url('/assests/banner1.png')",
    'banner-2':"url('/assests/banner2.png')",
    'banner-3':"url('/assests/banner3.png')",
  }
}
}
