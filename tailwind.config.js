/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1880px',
    },
    extend: {
      colors: {
        'primary': '#153243',
        'secondary': '#284b63',
        'text-primary': '#ffffff',
        'text-secondary': '#d9d9d9',
        'alt-primary': '#d66853',
        'alt-secondary': '#228cdb',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '8rem',
        xl: '8rem',
        // 2xl: '6rem',
      },
      // margin: { 
      //   DEFAULT: '9/12',
      //   auto: '75%'
      // },
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    },

      plugins: [],
    }
  }