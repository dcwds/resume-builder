import React, { FC, Fragment } from "react"
import useNetworkData from "../hooks/use-network-data"

import { Box, Text } from "rebass"
import { H1 } from "../components/headings"

const Network: FC = () => {
  const data = useNetworkData()

  return (
    <Fragment>
      <Box as="header" sx={{ mb: 4 }}>
        <H1>{data.name}</H1>
        <Text sx={{ fontSize: 2 }}>{data.title}</Text>
      </Box>

      <Box as="dl">
        {data.services.map((s, i) => (
          <Box key={i} sx={{ mb: 1, "&:last-of-type": { mb: 0 } }}>
            <Text
              as="dt"
              sx={{
                display: "inline-block",
                mr: 3,
                fontWeight: 600,
                color: "heading"
              }}
            >
              {s.name}
            </Text>
            <Text as="dd" sx={{ display: `inline-block` }}>
              {s.description}
            </Text>
          </Box>
        ))}
      </Box>
    </Fragment>
  )
}

export default Network
