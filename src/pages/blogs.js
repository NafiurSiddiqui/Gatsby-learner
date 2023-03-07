import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function Blogs({ data }) {
	const blogs = data.allMarkdownRemark.nodes;

	const contact = data.site.siteMetadata.contact;

	return (
		<Layout>
			<div>
				<h1>Blogs</h1>

				<section className="blogs">
					{blogs.map((blog) => (
						<Link to={'/blogs/' + blog.frontmatter.slug} key={blog.id}>
							<div>
								<h3>{blog.frontmatter.title}</h3>
								<p>{blog.frontmatter.author}</p>
							</div>
						</Link>
					))}
				</section>
			</div>

			<p>Reach out to us at {contact}</p>
		</Layout>
	);
}

//exprot BlogQuery
// export const query = graphql`
// 	query BlogQuery {
// 		allMarkdownRemark {
// 			nodes {
// 				frontmatter {
// 					author
// 					slug
// 					title
// 				}
// 				id
// 			}
// 		}
// 	}
// `;

//With sort
// export const query = graphql`
// 	query BlogQuery {
// 		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
// 			nodes {
// 				frontmatter {
// 					author
// 					slug
// 					title
// 					date
// 				}
// 				id
// 			}
// 		}
// 	}
// `;

//Multiple query

export const query = graphql`
	query BlogQuery {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					author
					slug
					title
					date
				}
				id
			}
		}
		site {
			siteMetadata {
				contact
			}
		}
	}
`;
