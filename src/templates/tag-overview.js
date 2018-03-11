import React from 'react'
import Overview from '../components/Overview'

export default function TagOverview({data,pathContext}) {
  return (
    <div>
      tagged with: {pathContext.tag}
      <Overview data={data}/>
    </div>
  )
}

export const query = graphql`
  query TagOverview($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            path
          }
        }
      }
    }
  }
`
