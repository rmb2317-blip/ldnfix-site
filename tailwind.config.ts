const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0b1020",
        surfaceMuted: "#111827",
        accent: "#facc15",
        accentSoft: "#fef3c7",
        textPrimary: "#f9fafb",
        textMuted: "#9ca3af"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.35)"
      },
      maxWidth: {
        content: "1120px"
      }
    }
  },
  plugins: []
};

export default config;
