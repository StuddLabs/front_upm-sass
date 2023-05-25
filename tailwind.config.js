/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
      transparent: 'transparent',
      black1: '#1F1F26',
      black2: '#292935',
      black3: '#2D303A',
      purple1: '#6B5CC8',
      black3: '#2D303A',
      white1: '#fff',
      red1: '#D74545',
      yellow1: '#D4D745',
      green1: '#40B16E',
      blue1: '#406EB1',
    }
  },
  plugins: [],
}

