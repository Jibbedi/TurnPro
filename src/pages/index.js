import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => <div>{getOverview(data)}</div>

export default IndexPage

const getOverview = data => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div style={{ marginBottom: '10px'}}>
        <Link to={node.fields.path}>{node.frontmatter.title} - {node.frontmatter.date}</Link>
        <div>{node.excerpt}</div>
      </div>
    ))}
  </div>
)

export const query = graphql`
  query Overview {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            path
          }
        }
      }
    }
  }
`
