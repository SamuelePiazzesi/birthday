import React from "react"
import Container from "./container"
import { Flex, Box } from "rebass"

const Layout = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Container px={[0]} pl={[0]} pr={[0]}>
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

export default Layout
