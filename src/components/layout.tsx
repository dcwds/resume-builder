import React, { FC, ReactNode } from "react"
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
        py: 4,
        px: 5
      }}
    >
      <Box as="main">{children}</Box>
    </Box>
  </Box>
)

export default Layout
