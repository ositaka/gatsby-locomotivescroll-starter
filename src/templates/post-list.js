import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Pagination from "../components/pagination"

const postList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext

  return (
		<Layout>
    <SEO title="Post List" />
    <h1>{`Page: ${currentPage}`}</h1>
    {posts.map(({ node }) => (
      <Post key={node.id}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        author={node.frontmatter.author}
        date={node.frontmatter.date}
        body={node.excerpt}
        tags={node.frontmatter.tags}
        fluid={node.frontmatter.image.childImageSharp.fluid}
      />
    ))}
    <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
  </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 380) {
                  ...GatsbyImageSharpFluid	
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default postList