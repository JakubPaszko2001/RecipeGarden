/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#32B768",
      },
      fontFamily: {
        main: ["Lateef", "serif"],
      },
    },
  },
  plugins: [],
};
