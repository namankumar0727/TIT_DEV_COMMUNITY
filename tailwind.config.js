/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, -15px)' },
          '50%': { transform: 'translate(-5px, 15px)' },
          '75%': { transform: 'translate(15px, 5px)' },
        },
       
      },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          Montserrat: ['Montserrat', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          orbitron: ['Orbitron', 'sans-serif'],
          archivo: ['Archivo', 'sans-serif'],
        },
        fontSize: {
        '10xl': '200px',  // Custom size for specific use
        '11xl': '225px',  // Custom size for specific use
      },
    },
  },
  plugins: [],
}

