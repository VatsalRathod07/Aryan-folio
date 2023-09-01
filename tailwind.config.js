/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bayon': ['Bayon, sans-serif'],
        'DMSans': ['DM Sans, sans-serif'],
        'Oswald': ['Oswald, sans-serif'],
      }
    },
  },
  plugins: [],
}