export const SYSTEM_FONT_STACK = `Inter, -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`

export const breakpoints = ["40em", "52em", "60em"]

export const colors = {
  background: "#1b1b1b",
  primary: "#8b8eff",
  text: "#b9b9b9",
  heading: "white"
}

export const space = [
  0,
  "0.25rem", // 4px
  "0.5rem", // 8px
  "1rem", // 16px
  "2rem", // 32px
  "4rem", // 64px
  "8rem", // 128px
  "16rem" // 256px
]

export const fonts = {
  body: SYSTEM_FONT_STACK,
  heading: "inherit"
}

export const fontSizes = [
  "0.8rem", // 13px
  "1rem", // 16px
  "1.25rem", // 20px
  "1.563rem", // 25px
  "1.953rem", // 31px
  "2.441rem", // 39px
  "3.052rem" // 49px
]

export const fontWeights = {
  body: 400,
  heading: 600,
  semiBold: 600,
  bold: 700
}

export const lineHeights = {
  body: 1.75
}

export const text = {
  heading: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading"
  },
  display: {
    fontFamily: "heading",
    lineHeight: "heading"
  }
}

export const variants = {
  link: {
    color: "primary",
    fontWeight: "bold",
    textDecoration: "none"
  }
}

export const styles = {
  root: {
    bg: "background",
    color: "text",
    fontFamily: "body",
    lineHeight: "body",
    minHeight: "100vh"
  },
  h1: {
    color: "heading",
    fontSize: [4, null, 5]
  },
  h2: {
    color: "heading",
    fontSize: [3, null, 4],
    mb: 3
  },
  h3: {
    color: "heading",
    fontSize: 2
  }
}

export default {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  text,
  variants,
  styles
}
