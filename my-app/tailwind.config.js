/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary:"#476683",
      secondary:"#A1A1A1",
      light:"#FFFFFF",
      dark:"#080808",
      lightGray:"#E5E5E5",
      darkGray:"#95A5B3",
    },
    extend: {
      fontFamily:{
        restora: ["Restora"],
      }
    },
  },
  plugins: [],
};
