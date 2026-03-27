import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: { DEFAULT: "#4A1530", dark: "#3d1128" },
        rose: { DEFAULT: "#C9788A", glow: "rgba(201,120,138,.3)" },
        cream: { DEFAULT: "#FAF7F5", dark: "#F3EDE9" },
        gold: { DEFAULT: "#C4A46B" },
        blush: { DEFAULT: "#F2C4CE" },
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "wa-pulse": {
          "0%, 100%": {
            boxShadow: "0 4px 16px rgba(37,211,102,.3)",
          },
          "50%": {
            boxShadow:
              "0 4px 16px rgba(37,211,102,.45), 0 0 0 8px rgba(37,211,102,.06)",
          },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0) rotate(1deg)" },
          "50%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(2deg)" },
        },
      },
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        scroll: "scroll 28s linear infinite",
        "wa-pulse": "wa-pulse 3.5s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite 0.5s",
        "float-fast": "float-fast 4s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
export default config;
