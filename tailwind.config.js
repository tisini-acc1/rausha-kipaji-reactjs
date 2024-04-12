const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#23262F",
        secondary: "#16171a",
        accent: "#286F6C",
        grey: {
          DEFAULT: "#919297",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#fff",
        pink: "pink",
        orange: "#ff581f",
      },
      backgroundColor: {
        orange: "#ff581f",
      },
      backgroundImage: {
        hero: 'url("/images/hero-bg.jpg")',
        cta: 'url("/images/23/rausha-23-8.jpg")',
        about: 'url("/images/hero-bg.jpg")',
        quote: 'url("/images/hero-bg.jpg")',
        faqs: 'url("/images/23/kipaji2023.jpeg")',
        tisini: 'url(/tisini-banner.jpg)',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  plugins: [
    flowbite.plugin(),
  ],
};
