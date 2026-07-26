/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Segoe UI", "sans-serif"],  // Existing config
        inter: ["Inter", "serif"],          // Custom Inter font configuration
        bangla: ['"Anek Bangla"', "sans-serif"],
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
