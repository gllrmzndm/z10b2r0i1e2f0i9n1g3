import * as React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Update Markdown files that include HTML code
// https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/


const ArticlesWhatever = ({ data }) => {
  return (
    <div>test</div>
  )
}


export const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD-MM-YYYY")
                hero_image
              }
              id
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ArticlesWhatever

