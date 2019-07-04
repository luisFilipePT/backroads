import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"

const getAboutImage = graphql`
query aboutImage {
  aboutImage:file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"/>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
          <Img fluid={aboutImage.childImageSharp.fluid} alt="awesome team"/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cum nesciunt.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cum nesciunt.</p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
