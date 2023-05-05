/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "createPage.html", "script.ts",],
  theme: {
    extend: {
      fontFamily: {
        'facebook-font': ['SFProDisplay-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
