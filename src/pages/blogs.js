import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function Blogs({ data }) {
	const blogs = data.allMarkdownRemark.nodes;

	console.log(blogs);

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
		</Layout>
	);
}

//exprot BlogQuery
export const query = graphql`
	query BlogQuery {
		allMarkdownRemark {
			nodes {
				frontmatter {
					author
					slug
					title
				}
				id
			}
		}
	}
`;
