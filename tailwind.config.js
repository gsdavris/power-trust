/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["h-64", "min-h-[600px]", "opacity-50", "min-h-screen", "bg-[#009047]", "bg-[#ffdd00]"],
  theme: {
    extend: {
      colors: {
        primary: "#003462",
        secondary: "#8bc751",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
