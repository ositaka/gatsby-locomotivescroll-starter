import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AuthorsPage = () => (
  <Layout>
    <SEO title="Authors" />
    <h1>A List of Authors</h1>
    <p>List of Tags</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AuthorsPage
