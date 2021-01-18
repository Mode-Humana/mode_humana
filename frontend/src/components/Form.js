import React, {useState} from 'react';
import "../style/Form.scss";
import server from '../server'

export default function Form(props) {
	const [email, setEmail] = useState('');
	const [disable, setDisable] = useState(true);
	const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	function handleSubmit(e) {
		server.addEmail(email)
			.then((response) => {
				console.log(response)
				setEmail("")
				setDisable(true)
				props.handleToast("Email successfully submitted")
			})
			.catch((err) => {
				props.handleToast("Email was not submitted")
			})
	}

	function handleChange(e) {
		setDisable(!regexp.test(e.target.value))
		setEmail(e.target.value)
	}

	return (
		<div id="form">
			<form onSubmit={(e) => e.preventDefault()}>
				<input onChange={(e) => handleChange(e)} type="email" placeholder={props.textName} value={email}/>
				<button onClick={(e) => handleSubmit(e)} type="submit" disabled={disable}>{props.buttonName}</button>
			</form>
		</div>
	);
}