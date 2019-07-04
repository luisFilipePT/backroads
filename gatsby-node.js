const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 1
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, idx) => {
    createPage({
      path: idx === 0 ? "/blogs" : `/blogs/${idx + 1}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: idx * postsPerPage,
        numPages,
        currentPage: idx + 1
      }
    })
  })
}
