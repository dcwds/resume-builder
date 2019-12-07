import React, { FC, Fragment } from "react"
import useNetworkData from "../hooks/use-network-data"

import { Box, Flex, Text } from "rebass"
import ExternalLink from "../components/external-link"
import { H1 } from "../components/headings"

const Network: FC = () => {
  const data = useNetworkData()

  return (
    <Fragment>
      <Box as="header" sx={{ mb: 3 }}>
        <H1>{data.name}</H1>
        <Text sx={{ fontSize: 2 }}>{data.title}</Text>
      </Box>

      <Flex as="dl">
        {data.services.map((s, i) => (
          <Box key={i} width={1 / 3}>
            <Text
              as="span"
              sx={{
                display: "block",
                fontWeight: 600,
                color: "heading"
              }}
            >
              {s.name}
            </Text>
            <ExternalLink href={s.link}>{s.description}</ExternalLink>
          </Box>
        ))}
      </Flex>
    </Fragment>
  )
}

export default Network
