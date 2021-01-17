const express = require('express');
const router = express.Router();
const emails = require('../models/emails')

router.post('/add_email', (req, res) => {
	console.log(req.body);
	emails.addEmail(req.body)
	res.status(200).json({ status: "Success !", data: { body: req.body } });
})

module.exports = router;