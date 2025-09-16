import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      /* ---- Colors / Typography ---- */
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
        sans: ["Satoshi", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
      },

      /* ---- Keyframes ---- */
      keyframes: {
        // marquee: endless horizontal scroll
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // fade-in-up: subtle entrance
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // star-border sweeps
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
        // 🔥 animated gradient border for buttons
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },

      /* ---- Animations ---- */
      animation: {
        marquee: "marquee 10s linear infinite",
        "fade-in-up": "fade-in-up 0.1s ease-out forwards",
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
        // 🔥 animated gradient border for buttons
        "border-flow": "border-flow 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
