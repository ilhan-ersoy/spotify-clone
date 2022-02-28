module.exports = {
  mode:'jit',
  darkMode: "false",
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}','./public/index.html'],
  theme: {
    extend: {
      colors:{
        backdrop:'#121212',
        primary:'#1db954',
        active:'#282828',
        link:'#b3b3b3',
        footer:'#181818',
        prevs :'#131313',
        authBar:'#282828',
        authBarActive:'#7d777742'
      },
      fontSize:{
        s:'0.813rem'
      },
      padding:{
        0.5:'0.188rem',
      },
      width:{
        50:'12.25rem'
      }
    },
  },
  plugins: [

  ],
}
