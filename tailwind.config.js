/** @type {import('tailwindcss').Config} */
export default{
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors:{
      'greenDark': '#2C4928',
      'green': '#58774C',
      'white': '#FFFFFF',
      'brown': '#4B231B'
    },
    fontFamily: {
      'montserrat' : ['Montserrat', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

