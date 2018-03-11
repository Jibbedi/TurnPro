/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `path`,
      value: path,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                path
              }
              frontmatter {
                title
                tags
              }
              html
            }
          }
        }
      }
    `).then(result => {

      const tags = []

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        node.frontmatter.tags.forEach(tag => {
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        })

        createPage({
          path: node.fields.path,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            tags: node.frontmatter.tags,
            title : node.frontmatter.title
          }
        })
      })

      tags.forEach(tag => {
        createPage({
          path: tag,
          component: path.resolve(`./src/templates/tag-overview.js`),
          context: {
            tag
          }
        })
      })

      resolve()
    })
  })
}
