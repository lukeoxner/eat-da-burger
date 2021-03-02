// setting up dependencies
const connection = require('./connection.js');

// setting up the object relational mapping (ORM)
const orm = {
	selectAll(table, cb) {},
	insertOne() {},
	updateOne() {},
};

module.exports = orm;
