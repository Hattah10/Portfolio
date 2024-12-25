/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkBlue: "#437FC7",
        normalBlue: "#6daffe",
        lightBlue: "#edf6ff",
        darkBrown: "b9732f",
      },
    },
  },
  plugins: [],
};