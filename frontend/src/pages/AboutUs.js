import React from 'react';
import "../style/AboutUs.scss";
import { GiClothespin } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { Row, Col, Container } from "react-grid-system";

export default function AboutUs() {
	return (
		<div id="about-us">
			<Container className="content">
				<Row>
					<Col>
						<h1 className="title">About Us</h1>
					</Col>
				</Row>
				<Row justify="center" align="center">
					<Col className="center-icon" xs={12} md={2}>
						<GiClothespin className="icon"/>
					</Col>
					<Col xs={12} md={10}>
						<h3 className="statement">Mode Humana is a <strong class="statement-half">&nbsp;personal styling service&nbsp;</strong> dedicated to bringing <strong class="statement-half">&nbsp;sustainable&nbsp;</strong> and <strong class="statement-half">&nbsp;ethical&nbsp;</strong> fashion to your wardrobe.</h3>
					</Col>
				</Row>
				<Row className="row" justify="center" align="center">
					<Col className="center-icon" xs={12} md={2}>
						<IoShirtOutline className="icon"/>
					</Col>
					<Col xs={12} md={10}>
						<h3 className="statement">Our <strong class="statement-half">&nbsp;stylists&nbsp;</strong> will ship to you a <strong class="statement-half">&nbsp;curated&nbsp;</strong> selection of pieces, based off of your <strong class="statement-half">&nbsp;preferences&nbsp;</strong>, that meet Mode Humana’s rigorous standards.</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}