import React, { FC } from "react"
import useNetworkData from "../hooks/use-network-data"

import { Box, Text } from "rebass"
import { H1, H3 } from "../components/headings"

const Network: FC = () => {
  const data = useNetworkData()

  return (
    <Box>
      <H1>{data.name}</H1>
      <Text>{data.title}</Text>

      <Box as="ul">
        {data.services.map((s, i) => (
          <Box as="li" key={i}>
            <H3>{s.name}</H3>
            <Text>{s.description}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Network
