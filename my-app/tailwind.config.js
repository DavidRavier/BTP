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
      dark:"#080808"
    },
    extend: {
      fontFamily:{
        restora: ["Restora", "sans-serif"],
      }
    },
  },
  plugins: [],
};
