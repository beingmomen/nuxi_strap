/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./node_modules/flowbite.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("flowbite/plugin"),
  ],
};
