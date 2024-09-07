/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#c168f4",
        btnHoverColor: "#af41ee",
        darkCardBgColor: "#1a1c23",
        darkGrayColor: "#9e9e9e",
        darkTextColor: "#e5e7eb",
        darkBorderColor: "#4c4f52",
        darkBgColor: "#1a1d21",
        darkCardColor: "#212529",
      },
    },
  },
  plugins: [],
};
