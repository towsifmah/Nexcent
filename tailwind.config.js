/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif',]
      },
      container: {
        center:true,
         screens:{
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1160px',
         }
        },
    },
  },
  plugins: [],
}

