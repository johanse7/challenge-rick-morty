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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#EEE3FF",
          600: "#8054C7",
          700: "#5A3696",
        },
        secondary: {
          400: "#3B8520",
          600: "#63D838",
        },
        tertiary: {
          300: "#2563EB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
