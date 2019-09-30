import React, { FC, ReactNode } from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

import Header from "./header"
import Footer from "./footer"
import { Box } from "rebass"

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <Box variant="styles.root">
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: 960,
          minHeight: "inherit",
          px: 4
        }}
      >
        <Header siteTitle={title} />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
