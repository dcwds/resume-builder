import React, { FC } from "react"
import { Box } from "rebass"

const Spacer: FC = () => (
  <Box
    as="hr"
    sx={{
      backgroundColor: "washed",
      border: 0,
      height: 1,
      my: 4
    }}
  />
)

export default Spacer
