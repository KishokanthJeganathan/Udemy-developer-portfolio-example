import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../navbar/navbar.module.css';
import Links from '../../constants/Links';
import { Link } from 'gatsby';

const NavigationBar = () => {
	return (
		<header className={styles.navbar}>
			<Navbar collapseOnSelect expand="lg" variant="light">
				<Navbar.Brand>Oliver Randall</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						{Links.map((link) => (
							<Link to={link.link} className={styles.link}>
								{link.text}
							</Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default NavigationBar;
