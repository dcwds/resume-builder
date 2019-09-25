import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Text } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      as="section"
      sx={{
        fontSize: 5,
        mb: 6
      }}
    >
      <Text as="p" sx={{ mb: 4 }}>
        A greater Gatsby starter.
      </Text>
      <Text as="p">
        Theming, styles, linters, pre-commit hooks, &amp; more.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
