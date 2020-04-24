import React from "react"
import { Box } from "rebass"

const Container = ({
  maxWidth = 960,
  mx = "auto",
  px = 4,
  pl = 4,
  pr = 4,
  children,
}) => {
  return (
    <Box
      sx={{
        maxWidth,
        mx,
        px,
        pl,
        pr,
        color: "textwhite",
      }}
      width="100%"
    >
      {children}
    </Box>
  )
}

export default Container
