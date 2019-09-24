import React, { FC } from "react"
import { Box } from "rebass"

const Footer: FC = () => (
  <Box as="footer">
    © {new Date().getFullYear()}, Built with{" "}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Box>
)

export default Footer
