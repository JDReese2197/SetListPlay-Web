/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    fontFamily: {
      'helv': ['Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'spotify-purple-light': '#b023c2ff',
        'spotify-purple': '#8a17d3ff',
        'spotify-purple-dark': '#620ce6ff',
        'spotify-green': '#169c46',
      },
    },
  },
  plugins: [],
}