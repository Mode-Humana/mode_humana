import React from 'react';
import "../style/Form.scss";

export default function Form(props) {
	return (
		<div id="form">
			<form>
				<input type="email" placeholder={props.textName}/>
				<button>{props.buttonName}</button>
			</form>
		</div>
	);
}