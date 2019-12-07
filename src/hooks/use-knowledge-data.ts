import { graphql, useStaticQuery } from "gatsby"
import { Knowledge } from "../types"

const useKnowledgeData = () => {
  const {
    allKnowledgeJson: { edges: data }
  } = useStaticQuery(
    graphql`
      query KnowledgeQuery {
        allKnowledgeJson {
          edges {
            node {
              title
              items
            }
          }
        }
      }
    `
  )

  return data as Knowledge
}

export default useKnowledgeData
