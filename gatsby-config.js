/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				// The unique name for each instance
				name: `notes`,
				// Path to the directory
				path: `${__dirname}/src/notes/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				// The unique name for each instance
				name: `projects`,
				// Path to the directory
				path: `${__dirname}/src/blogs/`,
			},
		},
		// transformer config
		`gatsby-transformer-remark`,
	],
	siteMetadata: {
		title: 'eduP',
		description: 'This is an edu platform',
		copyright: 'copyright 2021.',
	},
};
