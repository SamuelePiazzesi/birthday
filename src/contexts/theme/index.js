import React from "react"
import { ThemeProvider } from "theme-ui"
import preset from "@rebass/preset"
import "../../assets/css/layout.css"

export default props => {
  let theme = {
    ...preset,
  }

  theme.fonts = {
    ...theme.fonts,
    heading: "Mabry Pro",
    monospace: "Menlo, monospace",
  }

  theme.colors = {
    ...theme.colors,
    background: "#FFF",
    primary: "#D61B62",
    secondary: "#FFF3F7",
    lightgray: "#CFC6C3",
    lightpink: "#F9D8E3",
    lightpurle: "#CD92CA",
    textwhite: "#333",
    lightgreen: "#01CBAB",
    green: "#3A9C2D",
    lightyellow: "#E3E481",
    peach: "#F9AA9F",
    orange: "#F38352",
  }

  theme.radii = {
    default: 8,
    circle: 99999,
  }

  const defaultButtonStyle = {
    borderRadius: 9999,
    fontWeight: 800,
    cursor: "pointer",
    outline: "none",
  }

  theme.buttons = {
    ...theme.buttons,
    ...defaultButtonStyle,
    primary: {
      ...theme.buttons.primary,
      color: "textwhite",
      ...defaultButtonStyle,
    },
    outline: {
      ...theme.buttons.outline,
      ...defaultButtonStyle,
    },
    secondary: {
      ...theme.buttons.secondary,

      ...defaultButtonStyle,
    },
  }

  console.log(theme)

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
