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
        primary: "#0d47a1",
        secondary: "#1976d2",
        accent: "#ff9800",
        background: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
export default config;