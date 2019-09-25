import React, { FC, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { Box } from "rebass"

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box variant="styles.root">
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: 1020,
          px: 4
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
