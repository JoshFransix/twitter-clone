/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    screens: {
      '3xl': { 'min': '1535px' },
      // => @media (min-width: 1535px) { ... }

      '2xl': { 'min': '1430px' },
      // => @media (min-width: 1535px) { ... }

      'xl': { 'min': '1290px' },
      // => @media (min-width: 1279px) { ... }

      'lg': { 'min': '1023px' },
      // => @media (min-width: 1023px) { ... }

      'md': { 'min': '767px' },
      // => @media (min-width: 767px) { ... }

      'sm': { 'min': '539px' },
      // => @media (min-width: 639px) { ... }
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue': '#1DA1F2',
        'darkblue': '#2795D9',
        'lightblue': '#EFF9FF',
        'dark': '#657786',
        'light': '#AAB8C2',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',
      }
    }
  },
  plugins: [
  ],
}
