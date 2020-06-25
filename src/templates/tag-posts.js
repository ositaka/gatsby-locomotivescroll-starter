import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const tagPosts = ({ data, pageContext }) => {
	const { tag } = pageContext
	const { totalCount } = data.allMarkdownRemark
	const pageTitle = `${totalCount} post${
		totalCount === 1 ? '' : 's'
		} tagged with "${tag}"`

	return (
		<Layout>
			<SEO title="Tag name?" />
			<h1>{pageTitle}</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
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
		</Layout>
	)
}

export const tagQuery = graphql`
	query ($tag: String!) {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}}}) {
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

export default tagPosts