import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#FF4A36",
        primaryBlue: "#2976EC",
        primaryGray: "#F5F5F5",
        black: "#242424",
        grayText: "#474747"
      },
      height: {
        vh80: "80vh",
        115: "460px",
      },
    },
  },
  plugins: [],
} satisfies Config;
