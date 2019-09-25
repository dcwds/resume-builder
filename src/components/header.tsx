import React, { FC } from "react"
import Link from "./link"
import { Box, Heading } from "rebass"

type Props = {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      mb: 7,
      py: 4
    }}
  >
    <Heading as="h2" sx={{ fontSize: "inherit" }}>
      <Link to="/">{siteTitle}</Link>
    </Heading>
  </Box>
)

export default Header
