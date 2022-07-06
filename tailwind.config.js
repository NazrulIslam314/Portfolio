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
        'forst-white-50': '#D4DAF7',
        'forst-orange': '#FD3A0F',
        'forst-yellow-50': '#E4F132',
        'forst-blue-50': '#183BF0',
        'forst-drak-red': '#341109',
      },
      height: {
        '80screen': '80vh',
        '90screen': '90vh',
      },
      width: {
        '80screen': '80wh',
        '90screen': '90wh',
      }
    },
  },
  plugins: [],
}
