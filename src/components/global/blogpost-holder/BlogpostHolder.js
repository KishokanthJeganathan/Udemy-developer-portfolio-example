import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../blogpost-holder/blogPostHolder.module.css';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const BlogpostHolder = ({ src, alt, title, slug }) => {
	return (
		<Col xs={12} sm={6} md={4} className={styles.blogPostHolder}>
			<Link to={`blog/${slug}`} className={styles.link}>
				<Img fluid={src} alt={alt} />
				<h3>{title}</h3>
			</Link>
		</Col>
	);
};

export default BlogpostHolder;
