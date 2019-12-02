import React, { FC } from "react"
import { Heading } from "rebass"

const H2: FC = ({ children, ...rest }) => (
  <Heading {...rest} as="h2" variant="styles.h2">
    {children}
  </Heading>
)

export default H2
