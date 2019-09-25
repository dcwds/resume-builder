import React, { FC } from "react"
import ExternalLink from "./external-link"
import { Box } from "rebass"

const Footer: FC = () => (
  <Box as="footer">
    © {new Date().getFullYear()}, Built with{" "}
    <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
  </Box>
)

export default Footer
