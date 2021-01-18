const mongoose = require('mongoose');
var validator = require("email-validator");

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
});
const Email = mongoose.model("Emails", EmailSchema);

async function addEmail (data) {
	if (!validator.validate(data.email)) {
		return null;
	}

	var query = Email.findOne({
		email: data.email
	})

	var out = await query.exec()
	if (!out) {
		return new Email({
			email: data.email,
		  }).save()
	}
	return null;
}

module.exports = {
	addEmail
}