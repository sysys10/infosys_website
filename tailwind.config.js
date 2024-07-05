/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "1120px",
      },
      dropShadow: {
        "white-md": "0 0px 3px rgba(255,255,255,0.75)",
        "white-lg": "0 0px 5px rgba(255,255,255.1)",
      },
      fontFamily: {
        pretendard: "Pretendard",
      },
      backgroundColor: {
        "hanyang-blue": "#0E4A84",
      },
    },
  },
  plugins: [],
};
