/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#022c22'
      }
    },
  },
  plugins: [],
//corePlugins solves conflict b/w ant d and tailwind
  corePlugins:{
    preflight:false
  },
}
