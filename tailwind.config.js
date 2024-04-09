/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39718F",
        secondary: "#FFFFFF",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
