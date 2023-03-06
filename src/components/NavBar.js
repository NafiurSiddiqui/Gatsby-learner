import { Link } from 'gatsby';
import React from 'react';

export default function NavBar() {
	return (
		<header>
			<h1>Logo</h1>
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
