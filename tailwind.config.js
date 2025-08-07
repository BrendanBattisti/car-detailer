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
        secondary: ["Caudex", "serif"],
      },
    },
  },
  plugins: [],
};
