/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@brendanbattisti/componentlibrary/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#bf0603",
          100: "#a71929",
          200: "#941625",
          200: "#821420",
          100: "#cc3835",
        },
        background: {
          DEFAULT: "#272323",
          100: "#232020",
          200: "#3d3939",
          300: "#524f4f",
        },
        text: "#F5EFED",
        subtext: "#cbd5e1",
      },
      fontFamily: {
        hero: ["Publico Banner", "system-ui", "sans-serif"],
        hero_emphasis: ["Style Script"],
        primary: ["Inter", "system-ui", "sans-serif"],
        // secondary: ["Caudex", "serif"],
        secondary: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
