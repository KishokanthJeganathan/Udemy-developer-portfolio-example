import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../blog/blog.module.css';
import BlogpostHolder from '../../global/blogpost-holder/BlogpostHolder';

const Blog = ({ blogPosts }) => {
	return (
		<Col xs={12} id="blog">
			<Row className={styles.row}>
				<Col xs={12} className={styles.portfolio}>
					<h2>Blog</h2>
				</Col>
				<Col xs={12}>
					<Row>
						{blogPosts.map((post) => (
							<BlogpostHolder
								title={post.title}
								src={post.image.fluid}
								alt={post.image.title}
								slug={post.slug}
							/>
						))}
					</Row>
				</Col>
			</Row>
		</Col>
	);
};

export default Blog;
