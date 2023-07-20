/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    animation: {
      bounce: "bounce 1s infinite",
    },
    colors: {
      fill: "#FFDBDA",
      white: "#f9f9f9",
      black: "#010002",
      pink: "#EF0F98",
      darkPink: "#DB7F8E",
      wood: "#967783",
      grey: "#9DA3A4",
      greyPink: "#D5C5C8",
    },
  },
  plugins: [],
};
