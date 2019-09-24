import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text } from "rebass"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h1">NOT FOUND</Heading>
    <Text as="p">You just hit a route that does not exist... the sadness.</Text>
  </Layout>
)

export default NotFoundPage
