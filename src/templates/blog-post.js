import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Overview from '../components/Overview'

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <span style={{ marginRight: '10px' }}> tagged in:</span>
      {post.frontmatter.tags.map(tag => (
        <Link style={{ marginRight: '10px' }} to={`/${tag}`}>
          {tag}
        </Link>
      ))}
      <Helmet
        title={post.frontmatter.title}
        meta={[
          { name: 'description', content: post.excerpt },
          { name: 'keywords', content: post.frontmatter.tags.join(',') },
        ]}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {post.timeToRead} minutes to read
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>

      {data.allMarkdownRemark ? (
        <div>
          <div>
            related:
          </div>
          <div>
            <Overview data={data}/>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($path: String!,  $tags : [String!], $title : String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        tags
      }
    },
    allMarkdownRemark(filter: {frontmatter: {tags : {in: $tags}, title:{ne: $title}}}) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            date
            category
          }
        }
      }  
    }
  }
`
