/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2D4C",
        secondary: {
          DEFAULT: "#47B370",
          100: "#47736F",
          200: "#80CDA5",
          300: "#8CEAB4",
        },
        black: {
          DEFAULT: "#000",
          100: "#1B1B1B",
          200: "#2B2B2B",
        },
        gray: {
          100: "E8E5E0",
        },
      },
    },
    fontFamily: {
      nextralight: ["Nunito-ExtraLight", "sans-serif"],
      nextralightitalic: ["Nunito-ExtraLightItalic", "sans-serif"],
      nlight: ["Nunito-Light", "sans-serif"],
      nlightitalic: ["Nunito-LightItalic", "sans-serif"],
      nregular: ["Nunito-Regular", "sans-serif"],
      nitalic: ["Nunito-Italic", "sans-serif"],
      nmedium: ["Nunito-Medium", "sans-serif"],
      nmediumitalic: ["Nunito-MediumItalic", "sans-serif"],
      nsemibold: ["Nunito-SemiBold", "sans-serif"],
      nsemibolditalic: ["Nunito-SemiBoldItalic", "sans-serif"],
      nbold: ["Nunito-Bold", "sans-serif"],
      nbolditalic: ["Nunito-BoldItalic", "sans-serif"],
      nextrabold: ["Nunito-ExtraBold", "sans-serif"],
      nextrabolditalic: ["Nunito-ExtraBoldItalic", "sans-serif"],
      nblack: ["Nunito-Black", "sans-serif"],
      nblackitalic: ["Nunito-BlackItalic", "sans-serif"],
    },
  },
  plugins: [],
};
