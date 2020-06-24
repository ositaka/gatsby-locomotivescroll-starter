import React from "react"
// import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Author = ({ author, authorFluid }) => (
    <>
        {author && (
            <div className="author">
                <Img fluid={authorFluid} />
                <h3>{author.name}</h3>
                <p>{author.bio}</p>
                <ul className="social-links">
                    <li><a href={author.website} target="_blank" rel="noopener noreferrer">website</a></li>
                    <li><a href={author.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href={author.twitter} target="_blank" rel="noopener noreferrer">twitter</a></li>
                    <li><a href={author.instagram} target="_blank" rel="noopener noreferrer">instagram</a></li>
                    <li><a href={author.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></li>
                </ul>
            </div>
        )}
    </>
)

export default Author