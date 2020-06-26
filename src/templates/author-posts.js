import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import authors from '../utils/authors'
import Post from '../components/Post'
// import Pagination from "../components/pagination"

const authorPosts = ({ data, pageContext, authorName }) => {
	const { totalCount } = data.allMarkdownRemark
	const author = authors.find(x => x.name === pageContext.authorName)
	const pageTitle = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} posts by "${pageContext.authorName}"`

	return (
		<Layout
			postAuthor={author}
			authorImageFluid={data.file.childImageSharp.fluid}
		>
			<SEO title={pageTitle} />

			<h1>{pageTitle}</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Post
					key={node.id}
					slug={node.fields.slug}
					title={node.frontmatter.title}
					author={node.frontmatter.author}
					date={node.frontmatter.date}
					body={node.excerpt}
					tags={node.frontmatter.tags}
					fluid={node.frontmatter.image.childImageSharp.fluid}
				/>
			))}
			{/* <Pagination currentPage={currentPage} numberOfPages={numberOfPages} /> */}
		</Layout>
	)
}

export const authorQuery = graphql`
	query($authorName: String!, $imageUrl: String!) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { author: { eq: $authorName } } }
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
								fluid(maxWidth: 650) {
									...GatsbyImageSharpFluid_tracedSVG
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
		file(relativePath: { eq: $imageUrl }) {
			childImageSharp {
				fluid(maxWidth: 350) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`

export default authorPosts
