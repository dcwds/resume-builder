import React, { FC } from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

type Props = {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: []
  title: string
}

const SEO: FC<Props> = ({ description, lang, meta, title }) => {
  const data = useSiteMetadata()
  const language = lang ? lang : "en"
  const metaDescription: string = description || data.description

  return (
    <Helmet
      htmlAttributes={{
        language
      }}
      title={title}
      titleTemplate={`%s – ${data.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: data.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta ? meta : [])}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
}

export default SEO
