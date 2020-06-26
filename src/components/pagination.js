import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ currentPage, numberOfPages }) => {
	const isFirst = currentPage === 1
	const isLast = currentPage === numberOfPages
	const previousPage =
		currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
	const nextPage = '/page/' + (currentPage + 1).toString()

	return (
		<div className="pagination">
			{isFirst ? (
				<button disabled>
					<span className="prev">Prev</span>
				</button>
			) : (
				<Link to={previousPage}>
					<span className="prev">Prev</span>
				</Link>
			)}

			{Array.from({ length: numberOfPages }, (_, i) =>
				currentPage === i + 1 ? (
					<button className="active" key={`page-number${i + 1}`}>
						<Link to={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>{i + 1}</Link>
					</button>
				) : (
					<button key={`page-number${i + 1}`}>
						<Link to={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>{i + 1}</Link>
					</button>
				),
			)}

			{isLast ? (
				<button disabled>
					<span className="next">Next</span>
				</button>
			) : (
				<Link to={nextPage}>
					<span className="next">Next</span>
				</Link>
			)}
		</div>
	)
}

export default Pagination
