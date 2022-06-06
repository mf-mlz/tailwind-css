module.exports = {
  content: [
    "./public/*.html",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend:{
      colors:{
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      height:{
        '80':'20rem',
        '100':'25rem'
      }

    }
  },
  plugins: [],
  variants:{
    opacity: ['responsive', 'hover', 'focus', 'disabled']
  }
}