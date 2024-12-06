/** @type {import('tailwindcss').Config} */
import Animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        smarty: {
          400: "#1A1A1D",
          300: "#3B1632",
          200: "#6A1E55",
          100: "#A64D79",
        },
      },
      backgroundColor: {
        background:
          "linear-gradient(40.21deg, #3B1632 34.89%, #A13C88 111.25%)",
      },
      fontFamily: {
        outfit: `"Outfit", sans-serif;`,
        inter: `"Inter", serif;`,
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [Animate],
};
