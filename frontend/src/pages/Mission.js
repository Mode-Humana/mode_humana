import React from 'react';
import "../style/Mission.scss";

import { Row, Col, Container } from "react-grid-system";

export default function Mission() {
	return (
		<div id="mission">
			<Container className="content">
				<Row>
					<Col>
						<h1 className="title">OUR MISSION</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={9} md={8} lg={7}>
						<h5 className="statement">Our mission is to make <strong>environmentally</strong> and <strong>socially</strong> responsible fashion accessible to all. Our <strong>personal styling service</strong> is dedicated to bringing sustainable and ethical fashion to your wardrobe.</h5>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

