import { graphql, useStaticQuery } from "gatsby"

type SiteMetadata = {
  title: string
  description: string
  author: string
}

const useSiteMetadata = () => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return { ...(siteMetadata as SiteMetadata) }
}

export default useSiteMetadata
