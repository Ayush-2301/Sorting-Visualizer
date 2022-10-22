/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors: {
      black: "#000000",
      "gray-black": "#40434A",
      "primary-color": "#009A9C",
      "sec-color": "#DEF8E8",
      "acc-color": "#EFEEEB",
      "sorted-color": "#00e5ba",
      //
      "primary-gradient-color": "rgb(0,154,156)",
      "primary-gradient-background":
        "linear-gradient(90deg, rgba(0,154,156,1) 0%, rgba(222,248,232,1) 100%)",
      "sec-gradient-color": "rgb(222, 248, 232)",
      "sec-gradient-background":
        " linear-gradient(90deg, rgba(222,248,232,1) 0%, rgba(239,238,235,1) 100%)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ss: { max: "425px" },
      // => @media (min-width: 425px) { ... }
    },
    fontFamily: {
      "main-font": `'Bebas Neue', cursive`,
    },
    extend: {},
  },
  plugins: [],
};
