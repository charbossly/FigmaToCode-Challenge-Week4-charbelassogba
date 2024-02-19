/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      t11: "11px",
      t16: "16px",
      t18: "18px",
      t20: "20px",
      t22: "22px",
      t24: "24px",
      t28: "28px",
      t36: "36px",
      t40: "40px",
      t42: "42px",
      t44: "44px",
    },
    extend: {
      colors: {
        blackUi: "#000000",
        grayUi: "#909097",
      },
      fontFamily: {
        steelfish: ["steelfish", "sans-serif"],
        sora: ["sora", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('@assets/images/man.png')",
      },
    },
  },
};
