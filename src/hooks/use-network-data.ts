import { graphql, useStaticQuery } from "gatsby"
import { Network } from "../types"

const useNetworkData = () => {
  const {
    allDataJson: { edges: data }
  } = useStaticQuery(
    graphql`
      query NetworkQuery {
        allDataJson {
          edges {
            node {
              name
              title
              services {
                name
                description
                link
              }
            }
          }
        }
      }
    `
  )

  return data[0].node as Network
}

export default useNetworkData
