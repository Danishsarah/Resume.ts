/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#6366f1",
        accent: "#8b5cf6",
        dark: "#0f172a",
        darker: "#020617"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      }
    }
  },
  plugins: []
};
