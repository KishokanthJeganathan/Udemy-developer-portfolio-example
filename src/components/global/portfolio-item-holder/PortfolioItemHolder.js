import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../portfolio-item-holder/portfolioItemHolder.module.css';
import Img from 'gatsby-image';

const PortfolioItemHolder = ({ src, alt, liveLink, githubLink, title }) => {
	return (
		<Col xs={12} sm={5} className={styles.portfolioItemHolder}>
			<Img fluid={src} alt={alt} />

			<Row className={styles.row}>
				<Col xs={8} className={styles.titleHolder}>
					<h3>{title}</h3>
				</Col>

				<Col xs={2} className={styles.linkHolder}>
					<a href={liveLink} className={styles.link} target="_blank" rel="noreferrer noopener">
						Live
					</a>
				</Col>
				<Col xs={2} className={styles.linkHolder}>
					<a href={githubLink} className={styles.link} target="_blank" rel="noreferrer noopener">
						Code
					</a>
				</Col>
			</Row>
		</Col>
	);
};

export default PortfolioItemHolder;
