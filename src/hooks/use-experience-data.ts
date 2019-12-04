import { graphql, useStaticQuery } from "gatsby"
import { Experience } from "../types"

const useExperienceData = () => {
  const {
    allExperienceJson: { edges: data }
  } = useStaticQuery(
    graphql`
      query ExperienceQuery {
        allExperienceJson {
          edges {
            node {
              title
              company
              startDate
              endDate
              summary
              highlights
            }
          }
        }
      }
    `
  )

  return data as Experience
}

export default useExperienceData
