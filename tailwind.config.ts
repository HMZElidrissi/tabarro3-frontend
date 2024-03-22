import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        background: "#FBFBFB", // Light gray
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
