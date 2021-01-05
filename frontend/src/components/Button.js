import React from 'react';
import "../style/Button.scss";
import { Row, Col, Container } from "react-grid-system";

export default function Button(props) {
	return (
		<div className="button background-color">
			<p className="font-color">{props.name}</p>
		</div>
	);
}