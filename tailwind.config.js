const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // add extra fonts here
      },
      colors: {
        "light-green": "#d0f4de",
        "light-blue": "#a9def9",
        "light-purple": "#e4c1f9",
        "light-yellow": "#fcf6bd",
        pink: "#ff99c8",
      },
      animation: {
        "slow-pulse": "pulse 10s linear infinite",
      },
    },
  },
  plugins: [],
};
