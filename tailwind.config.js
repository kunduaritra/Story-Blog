/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC313D",
        secondary: "#FFF7E3",
        solid: "#7C3B39",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};
