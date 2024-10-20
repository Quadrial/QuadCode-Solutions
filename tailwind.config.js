/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Header: "#002147",
        THeader:"#FFF9E6",
        DHeader: "#FFF9E6",
        DTHeader:"#002147",
        Text: "rgb(80, 100, 120)",
        Navbg: "rgb(200, 220, 255, 0.7)",
        Gray: "rgb(230, 230, 230)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(100vw, 0)" },
          "50%": { transform: "translate(100vw, 100vh)" },
          "75%": { transform: "translate(0, 100vh)" },
        },
      },
      animation: {
        "floating-0": "float 20s linear infinite",
        "floating-1": "float 22s linear infinite",
        "floating-2": "float 24s linear infinite",
        "floating-3": "float 26s linear infinite",
        // Add more variations as needed
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
