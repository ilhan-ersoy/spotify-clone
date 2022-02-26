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
      }
    },
  },
  plugins: [

  ],
}