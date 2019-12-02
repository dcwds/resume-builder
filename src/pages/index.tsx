import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Network from "../components/network"
import Experience from "../components/experience"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Network />
      <Experience />
    </Layout>
  )
}

export default IndexPage
