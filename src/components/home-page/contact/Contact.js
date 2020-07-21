import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../contact/contact.module.css';

const Contact = () => {
	const [ status, setStatus ] = useState('');

	const submitForm = (ev) => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('SUCCESS');
			} else {
				setStatus('ERROR');
			}
		};
		xhr.send(data);
	};
	return (
		<Col className={styles.contact} id="contact" xs={12}>
			<Row>
				<Col xs={12} className={styles.title}>
					<h2>Get in touch</h2>
				</Col>
				<Col xs={12} className={styles.title}>
					<p>
						Do you have a project I can help you with or simply want to say hi? Drop me a line on the form
						below!
					</p>
				</Col>
				<Col xs={12}>
					<form onSubmit={submitForm} action="https://formspree.io/xoqkpdzd" method="POST">
						<Row className={styles.inputHolder}>
							<Col xs={12}>
								<label htmlFor="email" />
								<input
									id="email"
									type="email"
									name="email"
									placeholder="Email Address"
									aria-placeholder="email address"
									className={styles.email}
								/>
							</Col>
							<Col xs={12}>
								<label htmlFor="messsge" />
								<input
									id="messege"
									type="text"
									name="message"
									placeholder="Messege"
									aria-placeholder="your messege"
									className={styles.messege}
								/>
							</Col>
						</Row>

						{status === 'SUCCESS' ? (
							<p>Thanks! I have recieved your messege and will get back to in under 2 working days!</p>
						) : (
							<button className={styles.btn}>Submit</button>
						)}
						{status === 'ERROR' && (
							<p className={styles.error}>Ooops! There was an error. Could you try again please?</p>
						)}
					</form>
				</Col>
			</Row>
		</Col>
	);
};

export default Contact;
