import styled from "@emotion/styled"
import { Link } from "rebass"

const ExternalLink = styled(Link)``

ExternalLink.defaultProps = {
  rel: "noopener noreferrer",
  target: "_blank"
}

export default ExternalLink
