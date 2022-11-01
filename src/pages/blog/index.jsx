import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ShowArticles from "../old.{mdx.slug}"


// This is link page that links to the corresponding ShowArticles(s)
// Showing excerpts and images ~Guillermo

const ArticlePage = ({ data }) => {
  return (
    <div>{
      data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h1 class="font-bold">
            <Link to={`/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h1>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
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
      }
      slug
      excerpt
    }
  }
}
`

export default ArticlePage