import React from 'react';
import "../style/Trend.scss";

import { Row, Col, Container } from "react-grid-system";

export default function Trend() {
	return (
		<div id="trend">
			<Container className="content">
				<Row>
					<Col>
						<h1 className="title">NOT A TREND</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="statement">To us, child labor, pollution, and growing landfills is not a <strong>“later problem”.</strong></h5>
						<h5 className="statement">Sustainability cannot continue to be treated as a trend by brands. That is <strong>why</strong> Mode Humana innovated the <strong>first</strong> personal style box of sustainable and secondhand fashion.</h5>
					</Col>
				</Row>
			</Container>
		</div>
	);
}