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
        background: {
          50: "#2b2d42",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        text: "#f8fafc",
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
