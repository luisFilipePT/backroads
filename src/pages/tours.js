import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"


const tours = ({data}) => (
  <Layout>
    <SEO title="Tours"/>
    <StyledHero image={data.defaultBcg.childImageSharp.fluid} />
    <Tours/>
  </Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default tours