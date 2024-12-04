/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your file paths
    "./node_modules/@treact/components/**/*.js", // Ensure Treact components are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

