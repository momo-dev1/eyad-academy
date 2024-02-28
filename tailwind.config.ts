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
        "hero-pattern": "url('/images/home-pattern.png')",
        'custom-gradient': 'linear-gradient(#fdfbfb, #f8f8f8)',
      },
      boxShadow: {
        'custom': '0 0 3px 2px #f8f8f8',
      },
      fontFamily: {
        careem: ['Careem', 'sans-serif'],
      },
      colors: {
        secondry: "#748078",
        nav: "#F8F8F8"
      }
    },
  },
  plugins: [],
};
export default config;


