/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:[ 'Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {
      colors:{
        'dark-blue': '#0b1120'
      }
    },
  },
  plugins: [
  ],
}