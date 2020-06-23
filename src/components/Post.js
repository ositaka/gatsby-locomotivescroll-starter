import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Post = ({ title, author, slug, date, body, fluid }) => {
    return (
        <>
            <Link to={slug}>
                <Img className="cover" fluid={fluid} />
                <h2 data-scroll data-scroll-speed=".5">{title}</h2>
            </Link>
            <p data-scroll data-scroll-speed=".25">on {date} by {author}</p>
            <p>{body}</p>
            <Link className="read-more" to={slug}>Read more</Link>
        </>
    )
}

export default Post