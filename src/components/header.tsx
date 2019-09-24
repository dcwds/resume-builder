import { Link } from "gatsby"
import React, { FC } from "react"
import { Box, Heading } from "rebass"

type Props = {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <Box as="header">
    <Heading as="h1">
      <Link to="/">{siteTitle}</Link>
    </Heading>
  </Box>
)

export default Header
