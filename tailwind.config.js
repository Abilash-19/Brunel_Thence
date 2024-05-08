/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybg: "#1C1C1C",
        secondarybg: "#EAEAEA",
        btnhover: "#4E4E4E",
        green:"#2DA950"
      },
      borderRadius: {
        btnradius: "107.06px",
      },
      padding: {
        btnpaddingy: "26.11px",
        btnpaddingx: "40px",
      },
      fontFamily: {
        style: "Covered By Your Grace, cursive",
      },
    },
  },
  plugins: [],
};
