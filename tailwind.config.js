/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0045FF",
        secondary: "#3CDBA2",
        "light-gray": "#EDEDED",
        "dark-gray": "#202020",
        white: "#F2F2F2",
        black: "#101010",
      },
    },
  },
  plugins: [],
};
