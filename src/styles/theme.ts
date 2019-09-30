export const SYSTEM_FONT_STACK = `-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`

export const breakpoints = ["40em", "52em", "60em"]

export const colors = {
  background: "#1b1b1b",
  primary: "#8b8eff",
  text: "#b9b9b9",
  heading: "white"
}

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export const fonts = {
  body: SYSTEM_FONT_STACK,
  heading: "inherit"
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const fontWeights = {
  body: 400,
  heading: 600,
  semiBold: 600,
  bold: 700
}

export const lineHeights = {
  body: 1.75,
  heading: 1.75
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
    fontSize: [4, null, 5],
    mb: [3, null, 4]
  },
  h2: {
    color: "heading",
    fontSize: [3, null, 4],
    mb: [3, null, 4]
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
