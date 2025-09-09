/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        j4mii: ['"La Chatte a Maman"', 'cursive'],
      },
    },
  },
  plugins: [],
}
