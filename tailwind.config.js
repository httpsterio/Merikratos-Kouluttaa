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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    themeRoot: ":root",
    themes: [
      {
        merikratos: {
          "primary": "#fdc627",
          "secondary": "#cb6040",
          // "accent": "#37cdbe",
          "neutral": "#fdf0d8",
          "neutral-alt": "#fff9ec",
        },
      },
    ],
  },
};
