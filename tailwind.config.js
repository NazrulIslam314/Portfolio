/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html"],
  theme: {
    fontFamily: {
      'sans': ['Arima', 'cursive'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Gulzar', 'serif'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'forst-white': '#D4F7EC',
        'forst-green': '#448D76',
        'forst-yellow': '#FB8604',
        'forst-blue': '#2E2FE3',
        'forst-drak': '#090934',
      },
      height: {
        '80screen': '80vh',
      }
    },
  },
  plugins: [],
}
