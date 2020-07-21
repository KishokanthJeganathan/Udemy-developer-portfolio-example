import React from 'react';
import styles from '../footer/footer.module.css';
import { Row, Col } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Links from '../../constants/Links';
import socialMedia from '../../constants/Socialmedia';
import { Link } from 'gatsby';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Col xs={12}>
				<Row className={styles.row}>
					<Col xs={12} className={styles.links}>
						<ul>
							{Links.map((linkInfo) => (
								<Link to={linkInfo.link} className={styles.link}>
									{linkInfo.text}
								</Link>
							))}
						</ul>
					</Col>
					<Col xs={12} md={4} className={styles.footerSocialMedia}>
						{socialMedia.map((platform) => (
							<a
								className={styles.socialMedia}
								href={platform.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{platform.icon}
							</a>
						))}
					</Col>
					<Col xs={12} className={styles.content}>
						Oliver Randall
					</Col>
					<Col xs={12} className={styles.content}>
						Freelance Front-end Developer
					</Col>
				</Row>
			</Col>
		</footer>
	);
};

export default Footer;
