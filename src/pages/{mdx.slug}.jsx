import * as React from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <div>
    <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    {children}
    </div>
  )
}

export const query = graphql`
  {
    mdx {
      id
      frontmatter {
        author
        categories
        date(formatString: "DD-MM-YYYY")
        hero_image
        hero_image_alt
        title
        toc
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      wordCount {
        words
      }
      body
    }
  }
`

export default BlogPost
