/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Header: "rgb(10, 10, 40)",
        Text: "rgb(80, 100, 120)",
        Navbg: "rgb(200, 220, 255, 0.7)",
        Gray: "rgb(230, 230, 230)",
      },
    },
  },
  plugins: [],
};
