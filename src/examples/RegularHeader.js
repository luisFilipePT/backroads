import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

const getSiteData = graphql`
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

const RegularHeader = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)

  return <StaticQuery query={getSiteData} render={(data) => {
    return <h1>Hello people {data.site.siteMetadata.title}</h1>
  }} />
}

export default RegularHeader
