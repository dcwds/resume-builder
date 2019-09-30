import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, Text } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      as="section"
      sx={{
        fontSize: [3, null, 4],
        mb: 6
      }}
    >
      <Heading as="h1" variant="styles.h1">
        A greater Gatsby starter.
      </Heading>
      <Text as="p">
        Theming, styles, linters, pre-commit hooks, &amp; more.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
