import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = ({data}) => {
  return (
    (
      <Layout>
        <SEO title="Contact"/>
        <StyledHero image={data.contactBcg.childImageSharp.fluid} />
        <Contact/>
      </Layout>
    )
  )
}

export const query = graphql`
query {
  contactBcg:file(relativePath:{eq: "connectBcg.jpeg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contact