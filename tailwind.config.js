module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: "#E4E4E4",
      turkish: {
        light: "#76E1E8",
        medium: "#53C5CC",
      },
      gray: {
        light: "#D6D7DD",
        lightish: "#82859a",
        medium: "#989898",
        dark: "#585B67"
      },
      blue: {
        dark: "#2E365C",
        darker: "#131C48"
      },
      red: "#E2666D",
    },
    fontFamily: {
      Barlow: ['Barlow', 'sans-serif'],
      Bree: ['Bree Serif', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
  }
}
