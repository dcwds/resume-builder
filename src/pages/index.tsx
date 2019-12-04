import React from "react"

import { Box, Flex } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Network from "../components/network"
import Experience from "../components/experience"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Flex as="article">
        <Box as="section" width={1 / 3}>
          <Network />
        </Box>
        <Box as="section" width={2 / 3}>
          <Experience />
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
