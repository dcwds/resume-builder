import { graphql, useStaticQuery } from "gatsby"

type Experience = {
  node: {
    title: string
    company: string
    startDate: string
    endDate: string
    summary: string
    highlights: []
  }
}[]

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
