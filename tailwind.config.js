/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2D4C",
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
