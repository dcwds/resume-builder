import React, { FC } from "react"
import { Heading } from "rebass"

const H1: FC = ({ children, ...rest }) => (
  <Heading {...rest} as="h1" variant="styles.h1">
    {children}
  </Heading>
)

export default H1
