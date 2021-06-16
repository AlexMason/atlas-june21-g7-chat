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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
