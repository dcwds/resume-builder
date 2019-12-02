import React, { FC } from "react"
import { Box, Heading, Text } from "rebass"
import { H2, H3 } from "../components/headings"

import useExperienceData from "../hooks/use-experience-data"

const Experience: FC = () => {
  const data = useExperienceData()
  console.log(data)

  return (
    <Box as="section">
      <H2>Experience</H2>
      <Box as="ul">
        {data.map((j, i: number) => (
          <Box as="li" key={i}>
            <H3>{j.node.title}</H3>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Experience
