const mongoDB = require('../db');

function getCollection() {
	return mongoDB.getCollection('emails')
}

function addEmail (data) {
	getCollection().insertOne(data)
		.then(result => {
			console.log(result)
		})
}

module.exports = {
	addEmail
}