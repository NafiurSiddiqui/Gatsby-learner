import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function NavBar() {
	const data = useStaticQuery(
		graphql`
			query MyQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	const { title } = data.site.siteMetadata;

	return (
		<header>
			<h1>{title}</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/learn">Learn</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

/**
 * @graphQl - to activate the query
 * @useStaticQuery - Hook for query to use outside of the pages.
 */
