import { graphql, useStaticQuery } from "gatsby"

export const useImage = () => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    gatsbyImageData
                }
            }
        }
  `)

    return data.allImageSharp.nodes
}