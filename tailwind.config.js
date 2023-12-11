/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '500px',
        'tablet': '640px',
        'laptop': '1024px', 
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

