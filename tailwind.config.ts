import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          OrangeP: "#FE6035",
          BegeP: "#FFF4F1",
          TextG: "#525252",
      },
    },
  },
  plugins: [],
} satisfies Config;
