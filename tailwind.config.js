/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#066F14",
        },
        gray: {
          dark: "#1A1A1A",
          light: "#4A4A4A",
        },
      },
    },

    fontFamily: {
      nunito: "'Nunito', sans-serif",
      dmSans: "'DM Sans', sans-serif",
    },
  },
  plugins: [],
};
