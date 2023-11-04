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
    extend: {
      backgroundImage: {
        'main': "url('../src/assets/backgroundTreen.png')",
        'footer': "url('../src/assets/backgroundRegister.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '4/12': '33.333333%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
};

