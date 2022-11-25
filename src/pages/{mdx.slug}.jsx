import * as React from 'react'
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const BlogPost = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <div className="font-semibold">
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query {
    mdx(id: {}) {
      frontmatter {
        layout
        author
        image
        featured
        toc
        date
        hero_image
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
      }
    }
  }
`
export default BlogPost