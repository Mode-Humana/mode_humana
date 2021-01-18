import React, {useState} from 'react';
import "../style/Form.scss";
import server from '../server'

export default function Form(props) {
	const [email, setEmail] = useState('');
	
	function handleSubmit(e) {
		console.log('submit')
		server.addEmail(email)
			.then((response) => {
				console.log(response)
				setEmail("")
				props.handleToast("Email successfully submitted")
			})
			.catch((err) => {
				console.log(err)
				props.handleToast("Email was not submitted")
			})
	}

	function handleChange(e) {
		console.log(e.target.value)
		setEmail(e.target.value)
	}

	return (
		<div id="form">
			<form onSubmit={(e) => e.preventDefault()}>
				<input onChange={(e) => handleChange(e)} type="email" placeholder={props.textName} value={email}/>
				<button onClick={(e) => handleSubmit(e)} type="submit">{props.buttonName}</button>
			</form>
		</div>
	);
}