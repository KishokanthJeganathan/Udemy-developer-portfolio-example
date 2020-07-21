import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import styles from '../hero-image/heroImage.module.css';

const HeroImage = ({ content, src, title }) => {
	return (
		<Col xs={12} className={styles.heroImageHolder}>
			<BackgroundImage fluid={src} style={{ height: '90vh' }}>
				<span className={styles.heroImage}>
					<h1 className={styles.title}>{title}</h1>
					<h3 className={styles.content}>{content}</h3>
				</span>
			</BackgroundImage>
		</Col>
	);
};

export default HeroImage;
