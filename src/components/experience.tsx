import React, { FC, Fragment } from "react"
import { Box, Flex, Text } from "rebass"
import { H2, H3 } from "../components/headings"
import Bullet from "../components/bullet"

import useExperienceData from "../hooks/use-experience-data"
import { Job } from "../types"

const JobItem = (props: Job) => (
  <Box as="li" sx={{ mb: 4, "&:last-of-type": { mb: 0 } }}>
    <Flex as="section">
      <Box width={1 / 2} sx={{ mb: 2 }}>
        <H3>{props.title}</H3>
        <Text>{props.company}</Text>
      </Box>

      <Box width={1 / 2} sx={{ textAlign: "right" }}>
        <Text as="span">{props.startDate}</Text> -{" "}
        <Text as="span">{props.endDate}</Text>
      </Box>
    </Flex>

    {props.summary && <Text>{props.summary}</Text>}

    <Box as="ul">
      {props.highlights.map((h, i) => (
        <Bullet key={i}>{h}</Bullet>
      ))}
    </Box>
  </Box>
)

const Experience: FC = () => {
  const data = useExperienceData()

  return (
    <Fragment>
      <H2>Experience</H2>
      <Box as="ul">
        {data.map(({ node: j }, i: number) => (
          <JobItem key={i} {...j} />
        ))}
      </Box>
    </Fragment>
  )
}

export default Experience
