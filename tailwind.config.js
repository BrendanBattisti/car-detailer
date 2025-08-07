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
          DEFAULT: "#ef233c",
          100: "#d90429",
        },
        accent: {
          DEFAULT: "#2292A4",
        },
        background: {
          DEFAULT: "#0f0a0a",
          100: "#272323",
          200: "#3f3b3b",
          300: "#575454",
        },
        text: "#F5EFED",
        subtext: "#cbd5e1",
      },
      fontFamily: {
        hero: ["Publico Banner", "system-ui", "sans-serif"],
        hero_emphasis: ["Style Script"],
        primary: ["Inter", "system-ui", "sans-serif"],
        secondary: ["Caudex", "serif"],
      },
    },
  },
  plugins: [],
};
