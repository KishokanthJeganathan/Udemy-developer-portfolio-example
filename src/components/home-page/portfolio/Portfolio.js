import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PortfolioItemHolder from '../../global/portfolio-item-holder/PortfolioItemHolder';
import styles from '../portfolio/portfolio.module.css';

const Portfolio = ({ portfolioItems }) => {
	return (
		<Col xs={12} id="portfolio">
			<Row className={styles.row}>
				<Col xs={12} className={styles.portfolio}>
					<h2>Portfolio</h2>
				</Col>
				{portfolioItems.map((item) => (
					<PortfolioItemHolder
						githubLink={item.githubLink}
						liveLink={item.liveLink}
						title={item.title}
						src={item.image.fluid}
						alt={item.image.title}
					/>
				))}
			</Row>
		</Col>
	);
};

export default Portfolio;
