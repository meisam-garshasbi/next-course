//10-4-Using Fonts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //1-Here as part of "extending the default theme" Here we add and set 
    //"fontFamily" to an object.In this object We can register 
    //our custom fonts.
    extend: {
      fontFamily:{
        poppins:"var(--font-poppins)"//2-we use The var function of CSS
        //to read the value of our custom CSS variable or property which
        //is --font-poppins .
        //Go to home page page.tsx
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
