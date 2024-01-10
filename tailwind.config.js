module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {},
      colors:{
        black : "#2E3239",
        secondary: "#161D25",
        primary : "#FF9902",
        aqua : "#268697",
        bgColor: "#F2F2F5",
        gray: "#CDCDCD"
      },
      // keyframes:{
      //   animationOpacity:{
      //     from: { opacity: 0.2},
      //     to: { opacity: 1 }
      //   },
      //   scaleIn: {
      //     '0%': {
      //       opacity: 0,
      //       transform: 'scale(0.9'
      //     },
      //     '50%': {
      //       opcity: 0.3
      //     },
      //     '100%': {
      //       opacity: 1,
      //       transform: 'scale(1)'
      //     }
      //   }
      // },
      // animation: {
      //   opacity: 'animationOpacity .5s ease-in-out',
      //   scaleIn: 'scaleIn .35s ease-in-out'
      // }
    },
    plugins: [],
  }