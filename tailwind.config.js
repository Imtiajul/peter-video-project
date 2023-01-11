/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "550px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
      "2xl": "1880px",
    },
    extend: {
      backgroundImage: {
        "hero-section": "url(/static/home-hero-bg.jpg)",
        "location-section": "url(/static/location-home.jpg)",
        "event-section": "url(/static/event.jpg)",
        "talk-section": "url(/static/talk-section.jpg)",
      },
      colors: {
        primary: "#922E1E",
        secondary: "#54595F",
        grey_text: "#4A4A4A",
        gray_text: "#414042",
        dark_grey: "#4f4f4f",
      },
      boxShadow: {
        card: "0px 16px 32px rgba(36, 36, 36, 0.24)",
        dialog: "0px 12px 32px rgba(36, 36, 36, 0.24)",
      },
    },
  },
  plugins: [],
};
