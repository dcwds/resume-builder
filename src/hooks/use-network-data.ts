import { graphql, useStaticQuery } from "gatsby"

type Network = {
  name: string
  title: string
  services: {
    name: string
    description: string
  }[]
}

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
