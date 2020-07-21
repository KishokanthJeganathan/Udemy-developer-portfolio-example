const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{ allContentfulBlogPost { edges { node { slug } } } 
	 }`);

	data.allContentfulBlogPost.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.slug}`,
			component: path.resolve('./src/templates/blog-template.js'),
			context: { slug: node.slug }
		});
	});
};
