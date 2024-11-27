/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      godzilla: ['godzilla', 'sans-serif'],
      oswald : ['oswald', 'sans-serif'],
      Righteous : ['Righteous', 'sans-serif'],
    },
    extend: {
      colors: {
        'ferrari-red': '#FF002A',
        'smoky-back': '#141313',
        'hit-grey': '#9AB2C0',
        'blue-charcoal': '#001120',
      },
      lineHeight: {
        '150' : '150%',
        '115' : '115%',
        '120' : '120%',
        '86' : '86%',
      }
    },
  },
  plugins: [],
}