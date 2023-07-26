import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CreatedTime = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {eq: "mdx"}}) {
        nodes {
          birthTime
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default CreatedTime
