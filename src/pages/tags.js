import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout>
    <SEO title="Tags" />
    <h1>Tags</h1>
    <p>List of Tags</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TagsPage