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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}

export default Layout
