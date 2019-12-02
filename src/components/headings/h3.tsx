import React, { FC } from "react"
import { Heading } from "rebass"

const H3: FC = ({ children, ...rest }) => (
  <Heading {...rest} as="h3" variant="styles.h3">
    {children}
  </Heading>
)

export default H3
