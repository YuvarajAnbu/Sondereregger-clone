/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "def-white": "#f1f1f1",
        "white-1": "#fafafa",
        "black-1": "#363636",
        "gray-1": "#999",
      },
      boxShadow: {
        def: "2px 1px 2px rgba(180,180,180,.7),inset 3px 2px 5px rgba(255,255,255,1)",
        hov: "-2px -1px 2px rgba(180,180,180,.3),inset -3px -2px 3px rgba(255,255,255,.7)",
        img: "0 3px 6px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
