import React from 'react';
import Button from '../components/Button';
import "../style/Home.scss";

import { Row, Col, Container } from "react-grid-system";

export default function Home() {
	return (
		<div id="home">
			<Container className="content">
				<Row>
					<Col>
						<h2 className="title">We're the<br/>first <strong>sustainable</strong><br/> style box.</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={10} sm={9} md={8} lg={7}>
						<h4 className="welcome">Welcome to <strong>Mode Humana</strong>. Let our personal stylists build your sustainable wardrobe. </h4>
					</Col>
				</Row>
				<Button name="Learn More"/>
			</Container>
		</div>
	);
}