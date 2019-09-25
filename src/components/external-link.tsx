import React, { FC, ReactNode } from "react"
import { Link } from "rebass"

type Props = {
  children: ReactNode
  href: string
  rel?: string
  target?: string
}

const ExternalLink: FC<Props> = props => (
  <Link {...props}>{props.children}</Link>
)

ExternalLink.defaultProps = {
  rel: "noopener noreferrer",
  target: "_blank"
}

export default ExternalLink
