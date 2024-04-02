import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          "50": "#fef2f2",
          "100": "#ffe1e1",
          "200": "#ffc8c8",
          "300": "#ffa2a3",
          "400": "#fc6d6e",
          "500": "#f54748",
          "600": "#e22021",
          "700": "#be1718",
          "800": "#9d1718",
          "900": "#821a1b",
          "950": "#470808",
        },
        diesel: {
          "50": "#fff3ec",
          "100": "#ffe3d2",
          "200": "#ffc3a4",
          "300": "#ff9a6b",
          "400": "#ff642f",
          "500": "#ff3a06",
          "600": "#f91d00",
          "700": "#cf0f00",
          "800": "#a30e09",
          "900": "#830f0b",
          "950": "#190101",
        },
        background: {
          "100": "#FBFBFB",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config;

export default config;
