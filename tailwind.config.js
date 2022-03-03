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
        authBarActive:'#7d777742',
        recently:'#303030',
        recentlyActive:'#535151',
        bottomBar:'#181818'
      },
      fontSize:{
        s:'0.813rem',
        m:'0.89rem',
        xxs:'0.688rem'
      },
      padding:{
        0.5:'0.188rem',
      },
      width:{
        50:'12.25rem',
        88:'22.75rem'
      },
      margin:{
        0.1:'0.063rem'
      }
    },
  },
  plugins: [

  ],
}
