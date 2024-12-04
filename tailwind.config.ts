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
        grayText: "#474747",
        grayText2: "#545353",
        lightGray: "#6B6B6B",
      },
      height: {
        vh80: "80vh",
        vh70: "70vh",
        85: "340px",
        115: "460px",
        134: "532px",
        100: "400px",
      },
      width: {
        130: "520px",
        156: "624px",
        182: "728px",
      },
      margin: {
        30: "120px",
      },
      fontSize: {
        'xxxs': "6px",
        'xxs': "8px",
      }
    },
  },
  plugins: [],
} satisfies Config;
