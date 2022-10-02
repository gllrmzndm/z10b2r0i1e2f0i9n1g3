import * as React from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const ShowArticles = ({ data, children}) => {
  return (
    <div>{
            data.allMdx.nodes.map(node =>(
                <article key={node.id}>
                        {node.frontmatter.title}
                        <MDXRenderer>
                        {node.body}
                        </MDXRenderer>
                </article>
            ))
        }
        </div>
  )
}


// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD-MM-YYYY")
          hero_image
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
        }
        body
      }
    }
  }
`

export default ShowArticles

