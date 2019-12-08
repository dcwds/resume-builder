import React from "react"

import { Box, Flex } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Network from "../components/network"
import Experience from "../components/experience"
import Knowledge from "../components/knowledge"
import Spacer from "../components/spacer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Box as="article">
        <Box as="section" sx={{ mb: 4 }}>
          <Network />
        </Box>
        <Spacer />
        <Flex as="section">
          <Box width={2 / 3} sx={{ pr: 5 }}>
            <Experience />
          </Box>
          <Box width={1 / 3}>
            <Knowledge />
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default IndexPage
