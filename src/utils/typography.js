import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.9,
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["PT Sans", "sans-serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"],
    },
    {
      name: "PT Sans",
      styles: ["400"],
    },
  ],
})

export default typography
