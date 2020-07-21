import React from 'react';
import Layout from '../components/global/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import { graphql } from 'gatsby';
import PortfolioItemHolder from '../components/global/portfolio-item-holder/PortfolioItemHolder';
import styles from '../page-css/portfolio.module.css';

export const query = graphql`
	query {
		allContentfulPortfolioItems {
			nodes {
				liveLink
				githubLink
				title
				image {
					fluid {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;
const Portfolio = ({ data }) => {
	return (
		<Layout>
			<Col xs={12}>
				<h1 className={styles.title}>Portfolio</h1>
			</Col>
			<Col xs={12}>
				<Row className={styles.row}>
					{data.allContentfulPortfolioItems.nodes.map((item) => (
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
		</Layout>
	);
};

export default Portfolio;
