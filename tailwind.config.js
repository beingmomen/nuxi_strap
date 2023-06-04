/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite.{js,ts}",
    "node_modules/tailvue/dist/tailvue.es.js",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    minWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    maxWidth: {
      aside: "260px",
      "aside-sm": "84px",
    },
    extend: {
      boxShadow: {
        ms: "0 2px 6px rgba(47, 43, 61, 0.14), 0 0 transparent, 0 0 transparent",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin.cjs"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
