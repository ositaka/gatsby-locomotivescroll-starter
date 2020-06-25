import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { slugify } from "../utils/utilityFunctions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <>
            <Link to={`/${slug}`}>
                <Img className="cover" fluid={fluid} />
                <h2 data-scroll data-scroll-speed=".5">{title}</h2>
            </Link>
            <p data-scroll data-scroll-speed=".25">on {date} by {author}</p>
            <ul className="tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
            <p>{body}</p>
            <Link className="read-more" to={`/${slug}`}>Read more</Link>
        </>
    )
}

export default Post