import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primaryColor: "#A3C3B8",
      secondaryColor: "#E1E8E6",
      tertiary: "#B7AFA6",
      textPrimary: "#1A1A1A",
      backgroundWhite: "#F7F5F2",
      black: "#000000",
      inStock: "#38761d",
      outOfStock: "#990000",
      googleIcon: "#DB4437"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        sectionV: "4rem",
        sectionH: "1rem",
        sectionHSm: "1.5rem",
        sectionHXl: "5rem",
      },
      height: {
        help: "32rem",
      },
      boxShadow: {
        input: "box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);",
        dropdown: "box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.7);",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
