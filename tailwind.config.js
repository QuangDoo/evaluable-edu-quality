/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#184785",
        },
        secondary: {
          10: "#8C8C8C",
        },
        success: {
          10: "#119757",
        },
        danger: {
          10: "#A23434",
        },
        warning: {
          10: "#D4CD16",
        },
        info: {
          10: "#1890FF",
        },
        light: {
          10: "#D7F0FF",
        },
        dark: { 10: "#000000" },
        gray: {
          1: "#FFFFFF",
          5: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
