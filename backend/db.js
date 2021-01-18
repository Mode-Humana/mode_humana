const mongoose = require('mongoose')

const {
	MONGO_USERNAME,
	MONGO_PASSWORD,
	MONGO_CLUSTER,
	MONGO_PORT,
	MONGO_DB
  } = process.env;
const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}-shard-00-00.9oybr.mongodb.net:${MONGO_PORT},${MONGO_CLUSTER}-shard-00-01.9oybr.mongodb.net:${MONGO_PORT},${MONGO_CLUSTER}-shard-00-02.9oybr.mongodb.net:${MONGO_PORT}/${MONGO_DB}?ssl=true&replicaSet=atlas-9m47na-shard-0&authSource=admin&retryWrites=true&w=majority`

let db;

// connect to database
function connect (callback) {
	mongoose.connect(connectionString, {useNewUrlParser: true})
	db = mongoose.connection;
	db.on('error', () => {
		console.log('DATABASE: failed connect to DB');
	});
	db.once('open', () => {
		console.log('DATABASE: connected to DB');
		callback();
	});
}

// get database
function get() {
	return db;
}

// close db connection
function close() {
	db.close();
}

module.exports = {
	connect, get, close
}