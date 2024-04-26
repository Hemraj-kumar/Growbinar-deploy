/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        hoverpurple: "#E2E0FF",
        shadowColor: "#636B78",
        gbpurple: "#6C60FE",
        bordergrey: "#D9D9D9",
        txtPurple: "#6C63FF",
      },
      fontWeight: {
        navWeight: "500",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      letterSpacing: {
        1: "0.64px",
        2: "0.22px",
        3: "0.072",
      },
      boxShadow: {
        md: "0px 8px 45px 0px rgba(70, 76, 136, 0.15)",
        newsletter: "0px 1.292px 35.012px 1.292px rgba(108, 96, 254, 0.26)",
      },
      fontFamily: {
        CircularStdMedium: ["Circular Std Medium"],
        CircularStdBold: ["Circular Std Bold"],
      },
    },
  },
  plugins: [],
};
