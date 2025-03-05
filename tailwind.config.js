/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8a2be2', // Purple color for public theme
          light: '#9d4edd',
          dark: '#6a0dad',
        },
        accent: '#e9d8fd',
      },
    },
  },
  plugins: [],
}; 