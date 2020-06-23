import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Post = ({ title, author, slug, date, body }) => {
    return (
        <>
            <h2 data-scroll data-scroll-speed=".5"><Link to={slug}>{title}</Link></h2>
            <p data-scroll data-scroll-speed=".25">on {date} by {author}</p>
            <p>{body}</p>
            <Link to={slug}>Read more</Link>
        </>
    )
}

export default Post