/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom small screen breakpoint
        'mobile-sm': '320px', // Small mobile (e.g., iPhone SE, older Androids)
        'mobile-md': '375px', // Medium mobile (e.g., iPhone 12 Mini, Galaxy A series)
        'mobile-lg': '425px', // Large mobile (e.g., iPhone 12 Pro Max, Galaxy Note)
        'mobile-xl': '480px', // Extra-large mobile screens
      },
      colors: {
        cyan: {
          300: '#67e8f9',
          500: '#06b6d4',
        },
        gray: {
          300: '#d1d5db',
          800: '#1f2937',
        },
      },
      spacing: {
        '128': '32rem', // Custom spacing for larger layouts
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Custom border-radius for rounded corners
      },
      fontFamily: {
        sans: ['Sans', 'Arial', 'sans-serif'], // Add Sans font family for headings
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat for other text
      },
    },
  },
  plugins: [],
};
