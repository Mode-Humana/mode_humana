import React from 'react';
import logo from "../static/mh-logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi"
import "../style/Navbar.scss";

export default function Navbar() {
	return (
		<div id="navbar">
			<div class="img-container">
				<a href="#home"><img className="logo" src={logo}/></a>
			</div>
			<div class="links-container">
				<FaInstagram className="icon"/>
				<FiMail className="icon"/>
			</div>
		</div>
	);
}