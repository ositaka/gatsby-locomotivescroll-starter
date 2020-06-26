import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Collapsible from "../components/collapsible"
import SEO from "../components/seo"
import Post from "../components/Post"
import Pagination from "../components/pagination"

const IndexPage = () => {
  const postsPerPage = 4
  let numberOfPages

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home page</h1>

      <StaticQuery query={indexQuery} render={data => {
        numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post key={node.id}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                tags={node.frontmatter.tags}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                body={node.excerpt}
              />
            ))}
            <Pagination currentPage={1} numberOfPages={numberOfPages} />
          </div>
        )
      }} />

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Collapsible>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
        veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
        rem. Minima, adipisci modi! Cumque aperiam delectus pariatur quia quo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
        veritatis totam, iste hic quibusdam doloribus, odio aliquid molestiae sunt
        rem.
    </Collapsible>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

const indexQuery = graphql`
  query PostsQuery {
    allMarkdownRemark( 
      sort: { fields: [frontmatter___date], order: DESC}
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp { 
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
