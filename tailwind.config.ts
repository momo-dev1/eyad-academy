import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/pattern.png')",
        'custom-gradient': 'linear-gradient(#fdfbfb, #e3e3e3)',
      },
      boxShadow: {
        'custom': '0 0 3px 2px #f8f8f8',
      },
      fontFamily: {
        careem: ['Careem', 'sans-serif'],
      },
      colors: {
        secondry: "#748078"
      }
    },
  },
  plugins: [],
};
export default config;


