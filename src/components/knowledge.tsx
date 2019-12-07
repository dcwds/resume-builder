import React, { FC, Fragment } from "react"
import useKnowledgeData from "../hooks/use-knowledge-data"

import { H2 } from "../components/headings"
import { Box } from "rebass"
import Bullet from "../components/bullet"

const Knowledge: FC = () => {
  const data = useKnowledgeData()

  console.log(data)

  return (
    <Fragment>
      {data.map(({ node: list }, i) => (
        <Box key={i} sx={{ mb: 4 }}>
          <H2>{list.title}</H2>
          <Box as="ul" sx={{ columns: 1 }}>
            {list.items.map((item, i) => (
              <Bullet key={i}>{item}</Bullet>
            ))}
          </Box>
        </Box>
      ))}
    </Fragment>
  )
}

export default Knowledge
