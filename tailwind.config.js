/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#14a800",
          secondary: "#181818",
          accent: "#676767",
          neutral: "#ffffff",
          success: "#ffffff",
          // warning: "#e5e7eb"
        },
      },
      {
        dark: {
          primary: "#14a800",
          secondary: "#e2e8f0",
          accent: "#a6adbb",
          neutral: "#0f172a",
          success: "#172131",
          // warning: "#f8fafc14"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

