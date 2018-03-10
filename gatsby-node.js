/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators
  console.log(1);
}
