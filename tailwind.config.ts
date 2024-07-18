import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Graphie: ["Graphie", "sans-serif"]
      },
      textShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
