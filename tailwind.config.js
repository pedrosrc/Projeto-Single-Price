/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'grayish-blue': 'hsl(218, 22%, 67%)',
        'cyan': 'hsl(179, 62%, 43%)',
        'cyan-light': '#4ABEBD',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)'
      },
      width: {
        120: '40rem'
      },
      fontFamily: {
        'sans': ['"Karla"','system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}