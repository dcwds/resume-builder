import React, { FC } from "react"
import { Box, Link } from "rebass"

const Footer: FC = () => (
  <Box as="footer" sx={{ py: 4 }}>
    © {new Date().getFullYear()}, Built with{" "}
    <Link
      href="https://www.gatsbyjs.org"
      rel="noopener noreferrer"
      target="_blank"
    >
      Gatsby
    </Link>
  </Box>
)

export default Footer
