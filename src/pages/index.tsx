import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import { Box, Heading, Text } from "rebass"

const links = [
  {
    name: "GatsbyJS",
    url: "https://gatsbyjs.org"
  },
  {
    name: "RebassJS",
    url: "https://rebassjs.org"
  },
  {
    name: "Husky",
    url: "https://github.com/typicode/husky"
  },
  {
    name: "Lint-Staged",
    url: "https://github.com/okonet/lint-staged"
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      as="section"
      sx={{
        fontSize: [2, null, 3],
        mb: 5
      }}
    >
      <Heading as="h1" variant="styles.h1">
        A greater Gatsby starter.
      </Heading>
      <Text as="p">
        Theming, styles, linters, pre-commit hooks, &amp; more.
      </Text>
    </Box>

    <Box as="section">
      <Heading as="h2" variant="styles.h2">
        Reading
      </Heading>
      <ul>
        {links.map((l, i) => (
          <Text as="li" key={i} sx={{ mb: [2, null, 3] }}>
            <ExternalLink href={l.url}>{l.name}</ExternalLink>
          </Text>
        ))}
      </ul>
    </Box>
  </Layout>
)

export default IndexPage
