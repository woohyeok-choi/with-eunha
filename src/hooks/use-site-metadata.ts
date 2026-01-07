import { graphql, useStaticQuery } from "gatsby"


export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          locale
          icon
        }
      }
    }
  `)

    return data.site.siteMetadata
}