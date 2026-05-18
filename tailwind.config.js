/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#ecfdf5', // emerald-50 (Backgrounds)
          medium: '#10b981', // emerald-500 (Primary Buttons/Icons)
          dark: '#064e3b', // emerald-950 (Text/Hero)
        }
      }
    }
  },
  plugins: [],
}