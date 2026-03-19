import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        primary: "#1A1A1A",
        secondary: "#6B6B6B",
        accent: "#C85A3A",
        codebg: "#F2F2EF",
        border: "#E5E5E0",
      },
      fontFamily: {
        serif: ["Noto Serif SC", "serif"],
        sans: ["Noto Sans SC", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "720px",
      },
      spacing: {
        "8base": "8px",
        "24": "24px",
        "48": "48px",
        "64": "64px",
      },
    },
  },
  plugins: [],
};
export default config;
