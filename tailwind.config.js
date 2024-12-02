/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'738px',
        'md':'1024px',
        'lg':'1366px',
      },
      
    },
  },
  plugins: [],
}
