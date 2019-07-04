import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import styles from "../css/blog.module.css"

const Blog = props => {
  const { data, pageContext } = props
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const nextPage = `/blog/${currentPage + 1}`
  const prevPage =
    currentPage - 1 === 1 ? `/blogs/` : `/blog/${currentPage - 1}`

  return (
    <Layout>
      <SEO title="Blogs"/>
      <section>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
      </section>
      <section className={styles.links}>
        {!isFirst && (
          <AniLink fade to={prevPage} className={styles.link}>
            Previous
          </AniLink>
        )}
        {Array.from({ length: numPages }, (_, idx) => {
          return (
            <AniLink
              key={idx}
              fade
              to={`/blogs/${idx === 0 ? "" : idx + 1}`}
              className={
                idx + 1 === currentPage
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {idx + 1}
            </AniLink>
          )
        })}
        {!isLast && (
          <AniLink fade to={nextPage} className={styles.link}>
            Next
          </AniLink>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
