import React from 'react'
import Overview from '../components/Overview'

const IndexPage = ({ data }) => <div>{<Overview data={data}/>}</div>

export default IndexPage



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
