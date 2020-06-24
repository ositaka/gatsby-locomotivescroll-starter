import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { slugify } from "../utils/utilityFunctions"

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter

    return (
        <Layout>
          <SEO title={post.title} />
          <h1>{post.title}</h1>
          <Img fluid={post.image.childImageSharp.fluid} />
          <p data-scroll data-scroll-speed=".25">on {post.date} by {post.author}</p>
            <ul className="tags">
                {post.tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost