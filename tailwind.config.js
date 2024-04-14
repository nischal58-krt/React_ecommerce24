const defaultTheme = require('tailwindcss/defaultTheme')



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'josefin': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
}
