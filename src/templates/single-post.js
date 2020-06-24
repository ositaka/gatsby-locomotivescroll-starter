import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { slugify } from "../utils/utilityFunctions"
import authors from "../utils/authors"

const SinglePost = ({ data, postAuthor, authorImageFluid }) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name === post.author)

    return (
        <Layout postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
        {/* <Layout> */}
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
          {/* <Author author={postAuthor} authorFluid={authorImageFluid} /> */}
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!) {
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
        file(relativePath: { eq: $imageUrl }){
            childImageSharp{
                fluid(maxWidth: 300){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SinglePost