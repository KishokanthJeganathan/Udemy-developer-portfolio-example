import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';

const Layout = ({ children }) => {
	return (
		<Container fluid className={`${styles.layout} `}>
			<NavigationBar />
			<main>
				<Row>{children}</Row>
			</main>
			<Footer />
		</Container>
	);
};

export default Layout;
