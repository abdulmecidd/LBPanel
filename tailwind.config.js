/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    padding: {
      DEFAULT: "2rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
    },
    container: {
      padding: "2rem",
    },
    colors: {
      blue: "#1fb6ff",
      indigo: {
        50: "#f2f3fc",
        100: "#e2e4f7",
        200: "#ccd0f1",
        300: "#a9b1e7",
        400: "#808ada",
        500: "#6267cf",
        600: "#5351c2",
        700: "#4b44b1",
        800: "#453d90",
        900: "#3a3573",
        950: "#282447",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      main: ["Quicksand", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
