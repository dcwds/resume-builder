import React, { FC, ReactNode } from "react"
import { Box } from "rebass"

type Props = {
  children?: ReactNode
}

const Bullet: FC<Props> = ({ children }) => (
  <Box
    as="li"
    sx={{
      position: "relative",
      "&::before": {
        backgroundColor: "bullets",
        content: "''",
        display: "inline-block",
        height: ".4rem",
        left: "-1.25rem",
        position: "absolute",
        width: ".4rem",
        top: "50%",
        marginTop: "-.2rem",
        borderRadius: "100%"
      }
    }}
  >
    {children}
  </Box>
)

export default Bullet
