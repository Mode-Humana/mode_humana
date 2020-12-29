import React from 'react';
import "../style/Mission.scss";

import { Row, Col, Container } from "react-grid-system";

export default function Mission() {
	return (
		<div id="mission">
			<Container className="content">
				<Row>
					<Col>
						<h1 className="title">Our Mission</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={10} sm={9} md={8} lg={7}>
						<h5 className="statement">Our mission is to make <strong>environmentally</strong> and <strong>socially</strong> responsible fashion accessible to all. As a <strong>sustainable venture</strong>, we’ll do the research, from brands to shipping, so you don’t have to.</h5>
					</Col>
				</Row>
			</Container>
		</div>
	);
}