/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          300: "#B3B3B3",
          500: "#7A7A7A",
          700: "#4C4C4C",
        },
      },
      fontFamily: {
        // Makes `` → Satoshi everywhere
        sans: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs:   ["0.75rem", { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:      "marquee 20s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
