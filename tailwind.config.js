/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#a3e635",
        secondary: "#64748b",
        dark: "#a3e635",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
