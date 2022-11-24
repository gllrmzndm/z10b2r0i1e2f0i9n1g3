import * as React from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <div className="">
      <div> pageTitle={data.mdx.frontmatter.title} </div>

      <div>
        <GatsbyImage className="w-full max-h-96"
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <div className="mx-8 lg:mx-40">
          <p className="my-4">{data.mdx.frontmatter.date}</p>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`
export default BlogPost