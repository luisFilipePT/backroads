import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from "../components/Home/FeaturedTours"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"


const home = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero image={data.defaultBcg.childImageSharp.fluid} home="true">
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ipsa."
      >
        <AniLink to="/tours" className="btn-white" fade>
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
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

export default home