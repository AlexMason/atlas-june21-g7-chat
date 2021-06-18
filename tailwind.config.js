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
        cnavy: "#000447",
        cblue: "#3458FF",
        cwhite: "#F5F5F5",
        cyellow: "#FFD135",
        cblack: "#1c1c1c",
        cgreen: "#059945",
      },
      boxShadow: {
        "orgcard-hover":
          "0px 0px 16px -2px rgba(52,88,255,1), inset 0 0px 10px -2px rgba(0, 0, 0, 1)",
        "orgcard-active": "0px 0px 10px 4px rgba(255,255,255,0.7)",
        "orgcard-image": "inset 0 0px 10px -2px rgba(0, 0, 0, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
