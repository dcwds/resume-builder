import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import { Box, Heading, Text } from "rebass"

type Link = {
  node: {
    name: string
    url: string
  }
}

const IndexPage = () => {
  const {
    allLinksJson: { edges: links }
  } = useStaticQuery(
    graphql`
      query {
        allLinksJson(sort: { fields: [name], order: ASC }) {
          edges {
            node {
              name
              url
            }
          }
        }
      }
    `
  )

  return (
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
          {links.map((l: Link, i: number) => (
            <Text as="li" key={i} sx={{ mb: [2, null, 3] }}>
              <ExternalLink href={l.node.url}>{l.node.name}</ExternalLink>
            </Text>
          ))}
        </ul>
      </Box>
    </Layout>
  )
}

export default IndexPage
