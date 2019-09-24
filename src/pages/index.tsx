import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading, Text } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1">Hi people</Heading>
    <Text as="p">Welcome to your new Gatsby site.</Text>
    <Text as="p">Now go build something great.</Text>
    <Image />
  </Layout>
)

export default IndexPage
