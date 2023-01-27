/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'primary-black': '#1A232E',
          'secondary-white': '#c7c7c7',
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"] 
      }
    },
  },
  plugins: [],
}
