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
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
        },
        text: "#f8fafc",
        subtext: "#cbd5e1",
      },
      fontFamily: {
        primary: ["Inter", "system-ui", "sans-serif"],
        secondary: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
