const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "droid-serif": ["droid-serif", "serif"],
      },
      colors: {
        cnavy: {
          light: "#00077a",
          DEFAULT: "#000447",
          dark: "#00032e",
        },
        cblue: {
          light: "#6681ff",
          DEFAULT: "#3458FF",
          dark: "#002dff",
        },
        cwhite: "#F5F5F5",
        cyellow: {
          light: "#ffdc66",
          DEFAULT: "#FFD135",
          dark: "#ffc500",
        },
        cblack: "#1c1c1c",
        cgreen: "#059945",
        coolgray: colors.coolGray,
      },
      boxShadow: {
        "orgcard-hover":
          "0px 0px 16px -2px rgba(52,88,255,1), inset 0 0px 10px -2px rgba(0, 0, 0, 1)",
        "orgcard-active": "0px 0px 10px 4px rgba(255,255,255,0.7)",
        "inset-black": "inset 0 0px 10px -2px rgba(0, 0, 0, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
