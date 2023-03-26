/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "graphik": ["Graphik","sans-serif"]
      },
      flex: {
        "1/2": "0, 0, 50%",
        "1/4": "0, 0, 25%",
      },
      maxWidth: {
        "1/2": "50%",
        "1/4": "25%",
      },
      screens: {
        "xs": "0",
        "sm:": "576px",
        "md": "768px",
        "lg": "991px",
        "xl": "1200px",
      },
      colors: {
        "blue": "#007bff",
        "indigo": "#6610f2",
        "purple": "#6f42c1",
        "pink": "#e83e8c",
        "red": "#dc3545",
        "orange": "#fd7e14",
        "yellow": "#ffc107",
        "green": "#838de4",
        "teal": "#20c997",
        "cyan": "#5866e3",
        "white": "#fff",
        "gray": "#6c757d",
        "gray-dark": "#212121",
        "primary": "#838de4",
        "secondary": "#616161",
        "success": "#838de4",
        "info": "#5866e3",
        "warning": "#ffc107",
        "danger": "#ff5050",
        "light": "#f4f4f4",
        "dark": "#212121",
      },
      boxShadow: {
        "primary": "0 2px 8px rgba(0,0,0,.12)",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}

module.exports = config;
