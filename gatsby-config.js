/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `7wg1agdqsxuj`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: `gvAU3K2XUSIruQA_swm8MnX6nSgrkdoiY2OUJfZFjxw`
			}
		}
	]
};
