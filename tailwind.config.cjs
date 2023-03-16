/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        "25": "0, 0, 25%",
        "50": "0, 0, 50%"
      },
      maxWidth: {
        "1/2": "50%",
        "1/4": "25%"
      }
    },
  },
  plugins: [],
};

module.exports = config;
