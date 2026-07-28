/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Jost", "Inter", "sans-serif"],
        display: ["Jost", "sans-serif"],
        inter: ["Inter", "serif"],
        bangla: ['"Anek Bangla"', "Jost", "sans-serif"],
        japanese: ['"Noto Sans JP"', '"Yu Gothic"', "sans-serif"],
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'html, body': {
          margin: '0',
          padding: '0',
          overflowX: 'hidden',
        }
      })
    },
  ],
}
