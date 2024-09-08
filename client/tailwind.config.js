/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-100': '#fbfbfd',
        'neutral-200': '#f2f5fa',
        'primary-100': '#0c53fb',
        'primary-200': '#0144ea',
        'secondary-100': '#202e40'
      },
      fontFamily: {
        euclid: ['Euclid Circular A', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
      },
    },
  },
  plugins: [],
}

