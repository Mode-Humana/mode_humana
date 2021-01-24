const express = require('express');
const router = express.Router();
const Emails = require('../models/emails')
const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY)

router.post('/add_email', async (req, res) => {
	const email = await Emails.addEmail(req.body)
	if (email) {
		const msg = {
			to: req.body.email, // to email
			from: 'hello@modehumana.com', // verified sender
			subject: 'Welcome to Mode Humana!',
			templateId: 'd-80407c1cb9cf43f2972313bc438d30d5'
		}
	
		sgMail.send(msg)
			.then(() => res.status(200).json({
				status: "success: email sent",
				email: email
			}))
			.catch((err) => res.status(400).json({ 
				status: "failure: email not sent",
				err: err
			}))
	} else {
		res.status(400).json({ 
			status: "failure: email not added"
		});
	}
})

module.exports = router;