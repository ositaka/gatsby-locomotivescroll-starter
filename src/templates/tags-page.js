import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../utils/utilityFunctions"

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext
    return (
        <Layout>
            <SEO title="ALL Tags" />
            <h1>All tags</h1>
            <ul>
                {tags.map(tag => (
                    <li key={tag}>
                       <Link to={`/tag/${slugify(tag)}`}>
                           {tag} <small>{tagPostCounts[tag]}</small>
                       </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default tagsPage