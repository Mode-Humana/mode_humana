import React from 'react';
import Form from '../components/Form'
import "../style/ComingSoon.scss";

import { Row, Col, Container } from "react-grid-system";

export default function ComingSoon() {
	return (
		<div id="coming-soon">
			<Container class="content">
				<Row>
					<Col>
						<h1 className="title">Coming Soon.</h1>
					</Col>
				</Row>
				<Row class="sign-up">
					<Col>
						<h5>Sign up to be a part of our <strong>exclusive launch group.</strong></h5>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={10} md={8}>
						<Form textName="Email Address" buttonName="Join Mailing List"/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}