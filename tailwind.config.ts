import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1120",
        primary: "#38BDF8",
        secondary: "#6366F1",
        text: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
        },
        border: "rgba(255,255,255,.08)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "24px",
      },
      boxShadow: {
        soft: "0 8px 40px -8px rgba(56, 189, 248, 0.15)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.15), transparent 40%), radial-gradient(circle at 50% 100%, rgba(56,189,248,0.1), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "aurora-move": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -2%) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        blink: "blink 1s step-start infinite",
        aurora: "aurora-move 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
