/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        tertiary: "#33bbcf",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGray: "#191919",
        dimPurple: "#611bdd",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      flex: {
        2: "0 0 50%",
      },
      gridTemplateColumns: {
        custom: "auto 60%",
      },
      gridTemplateColumns: {
        auto: "auto",
      },
    },
  },
  plugins: [],
};
