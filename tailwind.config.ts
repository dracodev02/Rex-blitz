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
        primary: "#033954",
        green: "#31F39C",
        yellow: "#F0F726",
        red: "#FF4800",
        stroke: "#212121",
      },
      maxWidth: {
        desktop: "1192px",
      },
    },
  },
  plugins: [],
};
export default config;
