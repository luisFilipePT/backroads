import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/Layout"

import styles from "../css/single-blog.module.css"
import SEO from "../components/SEO"

const Blog = ({data}) => {
  const { title, published, text: { json } } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {

        if (!node.data.target.fields) {
          return null;
        }

        return (
          <div className="rich">
            <h3>this awesome image</h3>
            <img src={node.data.target.fields.file["en-US"].url} alt="" width="400"/>
            <p>image provided by ze</p>
          </div>
        )
      },
      "embedded-entry-block": (node) => {
        // theres abug with this - https://github.com/contentful/rich-text/issues/53
        if (!node.data.target.fields) {
          return null;
        }

        const { title, image, text } = node.data.target.fields

        return (
          <div className="rich">
            <h1>{title["en-US"]}</h1>
            <img src={image["en-US"].fields.file["en-US"].url} alt="" width="400"/>
            <p>{documentToReactComponents(text["en-US"])}</p>
          </div>
        )
      }
    }
  }

  return (
    <Layout>
      <SEO title={title}/>
      <section className={styles.blog}>
      <div className={styles.center}>
        <h1>{title}</h1>
        <h4>published at: {published}</h4>
        <article className={styles.post}>
          {documentToReactComponents(json, options)}
        </article>
        <AniLink fade to="/blog" className="btn-primary">
          all posts
        </AniLink>
      </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPost($slug: String!){
  post: contentfulPost(slug: { eq: $slug }) {
    title,
    published(formatString: "MMMM Do, YYYY"),
    text {
      json
    }
  }
}
`

export default Blog