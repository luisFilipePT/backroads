import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"


const blog = ({data}) => (
  <Layout>
    <SEO title="Blog"/>
    <StyledHero image={data.blogBcg.childImageSharp.fluid} />
    <BlogList/>
  </Layout>
)

export const query = graphql`
query {
  blogBcg:file(relativePath:{eq: "blogBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default blog