import React from 'react';
import styles from '../text-box/textBox.module.css';
import { Col, Row } from 'react-bootstrap';
import globalstyles from '../../global/global.module.css';

const TextBox = ({ title, content, id }) => {
	return (
		<section id={id}>
			<Col xs={12} className={styles.textBox}>
				<Row className={styles.textBoxContent}>
					<Col xs={12} md={8}>
						<h2>{title}</h2>
						<p className={globalstyles.p}> {content}</p>
					</Col>
				</Row>
			</Col>
		</section>
	);
};

export default TextBox;
