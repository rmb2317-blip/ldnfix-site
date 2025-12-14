// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050608",
        surface: "#0f1115",
        surfaceMuted: "#2a2d35",
        accent: "#f3c53f",
        textPrimary: "#f8fafc",
        textMuted: "#9ca3af"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)"
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
