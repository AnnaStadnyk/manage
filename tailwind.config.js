/** @type {import('tailwindcss').Config} */

function withOpacity(colorNane) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${colorNane}), ${opacityValue})`
    }
    return `rgb(var(${colorNane}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }


    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1440px',
    //   // => @media (min-width: 1440px) { ... }

    //   // '2xl': '1536px'
    // },

    extend: {
      colors: {
        brand: {
          light: 'var(--cl-brand-light)',
          DEFAULT: withOpacity('--cl-brand'),
        },
        headline: {
          DEFAULT: withOpacity('--cl-headline'),
          dark: 'var(--cl-headline-dark)',
        },
        primary: {
          light: 'var(--cl-base-light)',
          DEFAULT: 'var(--cl-base)',
        }
      },

      fontFamily: {
        primary: "Poppins, sans-serif",
        oxygen: "Oxygen, sans-serif",
        icon: "icon"
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          'lg': '1.5rem',
          '2xl': '3rem'
        }
      }
    },
  },


  plugins: [],
}

