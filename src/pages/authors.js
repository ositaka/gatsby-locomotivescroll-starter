import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import authors from '../utils/authors'
import { slugify } from '../utils/utilityFunctions'

import NunoImage from '../images/author-1.jpg'
import BirgitImage from '../images/author-2.jpg'

const AuthorsPage = () => (
	<Layout>
		<SEO title="Authors" />
		<h1>The Authors</h1>
		<div class="author">
			<img src={NunoImage} alt="Nuno profile" />
			<h2>{authors[0].name}</h2>
			<p>{authors[0].bio}</p>
			<Link to={`/author/${slugify(authors[0].name)}`}>View posts</Link>
		</div>
		<div class="author">
			<img src={BirgitImage} alt="Birgit profile" />
			<h2>{authors[1].name}</h2>
			<p>{authors[1].bio}</p>
			<Link to={`/author/${slugify(authors[1].name)}`}>View posts</Link>
		</div>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default AuthorsPage
