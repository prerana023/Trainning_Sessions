/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue': '#09061a',
      'white': '#FFFFFF',
      'grey': '#1e293b',
      'light-grey': '#64748b',
      'sky-blue': '#0ea5e9'
    },
    fontFamily:{
      sans:[ 'Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [
  ],
}