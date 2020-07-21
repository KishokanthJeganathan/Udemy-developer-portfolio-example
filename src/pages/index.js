import React from 'react';
import Layout from '../components/global/layout/Layout';
import HeroImage from '../components/home-page/hero-image/HeroImage';
import { graphql, useStaticQuery } from 'gatsby';
import Portfolio from '../components/home-page/portfolio/Portfolio';
import TextBox from '../components/global/text-box/textBox';
import Blog from '../components/home-page/blog/Blog';
import Contact from '../components/home-page/contact/Contact';

const query = graphql`
	query {
		allContentfulHomePage {
			nodes {
				heroImage {
					fluid(quality: 90, maxWidth: 1920) {
						...GatsbyContentfulFluid
					}
					title
				}
				philosophy {
					philosophy
				}
				heroImageText
				heroImageTitle
				aboutMeText {
					aboutMeText
				}
			}
		}
		allContentfulPortfolioItems(filter: { showOnMainPage: { eq: true } }) {
			nodes {
				image {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
				liveLink
				title
				githubLink
			}
		}
		allContentfulHomePageServicesTextNode {
			nodes {
				internal {
					content
				}
			}
		}
		allContentfulBlogPost(filter: { showOnMainPage: { eq: true } }) {
			posts: nodes {
				image {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
				readingTime
				showOnMainPage
				publishedDate(formatString: "MMMM Do, YYYY")
				title
				slug
			}
		}
	}
`;

const Home = () => {
	const data = useStaticQuery(query);
	console.log(data);

	const {
		heroImage: { fluid },
		heroImageText,
		heroImageTitle,
		aboutMeText: { aboutMeText },
		philosophy: { philosophy }
	} = data.allContentfulHomePage.nodes[0];

	const { nodes } = data.allContentfulPortfolioItems;

	const { posts } = data.allContentfulBlogPost;

	const { content } = data.allContentfulHomePageServicesTextNode.nodes[0].internal;

	return (
		<Layout>
			<HeroImage src={fluid} content={heroImageText} title={heroImageTitle} />
			<TextBox title="About Me" content={aboutMeText} id="about" />
			<Portfolio portfolioItems={nodes} />
			<TextBox title="Services" content={content} id="services" />
			<Blog blogPosts={posts} />
			<TextBox title="Work Philosophy" content={philosophy} />
			<Contact />
		</Layout>
	);
};

export default Home;
