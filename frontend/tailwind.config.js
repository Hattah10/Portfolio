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
        darkBrown: "#b9732f",
      },
      screens: {
        xs: "375px",
        "2xl": "1440px",
        "3xl": "1536px",
        // "4xl": "153px",
      },
      boxShadow: {
        blue: "0 4px 6px #437FC7", // Custom blue shadow
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(to right, #437FC7, #6daffe)",
      },
    },
  },
  plugins: [],
};
