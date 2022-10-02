import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ArticlePage = ({ data }) => {
    return (
        <div>{
            data.allMdx.nodes.map(node =>(
                <article key={node.id}>
                    <h1 class="font-bold">
                    <Link to={`/articles/${node.frontmatter.slug}`}>
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
    allMdx {
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