import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <span style={{marginRight:'10px'}}> tagged in:</span>
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
      <div style={{display: 'flex', justifyContent:'center'}}>{post.timeToRead} minutes to read</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        tags
      }
      excerpt
    }
  }
`
