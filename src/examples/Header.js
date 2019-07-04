import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `

const Header = () => {
  const {site: { siteMetadata }} = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>Title: {siteMetadata.title}</h1>
      <h1>Author: {siteMetadata.author}</h1>
    </div>
  )
}

export default Header
