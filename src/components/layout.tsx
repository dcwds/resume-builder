import React, { FC, ReactNode } from "react"

import Footer from "./footer"
import { Box } from "rebass"

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <Box variant="styles.root">
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "60rem",
        minHeight: "inherit",
        px: 4
      }}
    >
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  </Box>
)

export default Layout
