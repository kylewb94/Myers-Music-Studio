/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      'sans': 'Barlow',
      'display': 'Barlow\\ Condensed',
    },
    container: {
      center: true,
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
