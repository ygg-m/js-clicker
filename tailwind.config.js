/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "BlueRO": "linear-gradient(180deg, rgba(32, 66, 147, 0.65) 0%, #88A8D7 4.97%, #C8D8E9 23.91%, #9CADE9 37.95%, #98B8E8 45.88%, #B0C0F1 59%, #BECEF8 74.01%, #CDF5F9 84.73%, #FCFCFD 100%)"
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eec643",
          secondary: "#5c0099",
          accent: "#f39237",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
