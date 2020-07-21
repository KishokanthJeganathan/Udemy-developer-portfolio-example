import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../page-css/blogTemplate.module.css';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, INLINES, BLOCKS } from '@contentful/rich-text-types';

export const query = graphql`
	query($slug: String) {
		contentfulBlogPost(slug: { eq: $slug }) {
			slug
			readingTime
			publishedDate(formatString: "MMMM Do, YYYY")
			title
			content {
				json
			}
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;

const website_url = 'http://localhost:8000/';

const Bold = ({ children }) => <p className={styles.bold}>{children}</p>;
const Text = ({ children }) => <p className={styles.p}>{children}</p>;

const BlogPost = ({ data }) => {
	console.log(data);

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
			'embedded-asset-block': (node) => {
				return (
					<img
						src={node.data.target.fields.file['en-US'].url}
						className={styles.img}
						alt={node.data.target.fields.title['en-US']}
					/>
				);
			},
			[INLINES.HYPERLINK]: (node) => {
				return (
					<a
						href={node.data.uri}
						target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
						rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
					>
						{node.content[0].value}
					</a>
				);
			}
		}
	};

	const { image: { fluid }, title, publishedDate, readingTime, content: { json } } = data.contentfulBlogPost;
	return (
		<Layout>
			<Col>
				<Row className={styles.row}>
					<Col xs={11} md={10} className={styles.image}>
						<Img fluid={fluid} />
						<h1 className={styles.h1}>{title} </h1>
						<p className={styles.publishedDate}>{`Published on ${publishedDate}`}</p>
						<p className={styles.readingTime}>{`${readingTime} min read`}</p>
						{documentToReactComponents(json, options)}
					</Col>
				</Row>
			</Col>
		</Layout>
	);
};

export default BlogPost;
