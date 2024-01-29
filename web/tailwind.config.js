/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbbb04",
        card: "#1F1F1F",
        secondary: "#045cd2",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
