import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as RebassLink } from "rebass"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = (props: any) => (
  <RebassLink as={GatsbyLink} sx={{ textDecoration: "none" }} {...props}>
    {props.children}
  </RebassLink>
)

export default Link
