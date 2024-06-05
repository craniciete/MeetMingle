/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#333333', // Change this color to your desired dark mode background color
        },
      },
      // You can add more styles for dark mode here if needed
    },
  },
  darkMode: 'class', // Enables dark mode based on the 'dark' class added to the HTML element
  plugins: [],
}
