/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    animation: {
      bounce: "bounce 1s infinite",
    },
    colors: {
      fill: "#EAE3B7",
      white: "#f9f9f9",
      dark: "#010002",
      darkGreen: "#0E5433",
      lightGreen: "#86A340",
      lightPink: "#DE9F82",
      red: "#FF3131",
    },
  },
  plugins: [],
};
