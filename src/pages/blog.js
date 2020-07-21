import React from 'react';
import Layout from '../components/global/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import styles from '../page-css/blog.module.css';
import { graphql } from 'gatsby';
import BlogpostHolder from '../components/global/blogpost-holder/BlogpostHolder';

export const query = graphql`
	query {
		allContentfulBlogPost {
			nodes {
				image {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
				slug
				title
			}
		}
	}
`;
const Blog = ({ data }) => {
	return (
		<Layout>
			<Col xs={12}>
				<h1 className={styles.title}>Blog</h1>
			</Col>
			<Col xs={12}>
				<Row>
					{data.allContentfulBlogPost.nodes.map((post) => (
						<BlogpostHolder
							title={post.title}
							src={post.image.fluid}
							alt={post.image.title}
							slug={post.slug}
						/>
					))}
				</Row>
			</Col>
		</Layout>
	);
};

export default Blog;
