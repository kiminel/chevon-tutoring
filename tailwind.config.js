/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    animation: {
      bounce: "bounce 1s infinite",
    },
    colors: {
      fill: "#fde7f4",
      white: "#f9f9f9",
      black: "#010002",
      wood: "#967783",
      darkPurple: "#8F6F8E",
      purple: "#CD9FCC",
    },
  },
  plugins: [],
};
