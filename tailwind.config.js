/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "createPage.html", "script.ts", "createPage.ts", "logIn.html", "logIn.ts"],
  theme: {
    extend: {
      fontFamily: {
        'facebook-font': ['SFProDisplay-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
