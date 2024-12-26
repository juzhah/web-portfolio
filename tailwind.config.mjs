/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      DEFAULT: ["Inter"],
    },
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      xl: "1.25rem",
      subhead: "1rem",
      label: "0.75rem",
      "1xl": "1.12rem",
      "2xl": "1.5rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#FBFEF9",
        10: "#e2e5e0",
        20: "#c9cbc7",
        30: "#b0b2ae",
        40: "#979895",
        50: "#7e7f7d",
        60: "#646664",
        70: "#4b4c4b",
      },
      primary: {
        a0: "#f18f01",
        a10: "#f69b31",
        a20: "#faa84e",
        a30: "#fdb468",
        a40: "#ffc081",
        a50: "#ffcd9a",
      },
      surface: {
        DEFAULT: "#101014",
        a10: "#262629",
        a20: "#3d3d40",
        a30: "#565658",
        a40: "#707072",
        a50: "#8a8a8c",
      },
      "tonal-surface": {
        a0: "#251c17",
        a10: "#3a312c",
        a20: "#504743",
        a30: "#665f6b",
      },
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "28px",
      7: "40px",
      8: "60px",
      9: "100px",
      10: "160px",
      11: "240px",
    },
  },
  plugins: [
    typography,
    // ...
  ],
};
