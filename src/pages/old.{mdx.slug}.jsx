import * as React from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const BlogPost = ({ data, children }) => {
  return (
    <div pageTitle={data.mdx.frontmatter.title}>
      <p>{}</p>
      {children}
      <p>asdwasdfwsafdasfasf</p>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
