/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_site/*.{html,js}", "_site/**/*/index.{html,js}"],
  theme: {
    screens: {
      '2xs': '300px',
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        merikratos: {
          primary: "#ff0000",
          secondary: "#00ff00",
          accent: "#0000ff",
          neutral: "#ffac99",
          "base-100": "#9a9a9a",
          "base-500": "#767676",
          "base-700": "#2e2e2e",
        },
      },
      "light", "dark", "cupcake"],
  },
};
