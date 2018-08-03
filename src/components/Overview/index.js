import React from 'react'
import Link from 'gatsby-link'


const Overview = props => (
  <div>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <div style={{ marginBottom: '10px'}}>
        <Link to={node.fields.path}>{node.frontmatter.title} - {node.frontmatter.date}</Link>
        <div>{node.excerpt}</div>
      </div>
    ))}
  </div>
)

export default Overview;