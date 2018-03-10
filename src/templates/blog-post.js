import React from 'react'
import Helmet from 'react-helmet'

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      {console.log(post.frontmatter.tags)}
      <Helmet
        title={post.frontmatter.title}
        meta={[
          { name: 'description', content: post.excerpt },
          { name: 'keywords', content: post.frontmatter.tags.join(',') },
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        tags
      }
      excerpt
    }
  }
`
