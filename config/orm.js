// setting up dependencies
const connection = require('./connection.js');

// setting up the object relational mapping (ORM)
const orm = {
	selectAll(table, cb) {
		const queryString = `SELECT * FROM ${table}`;
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne(table, vals, cb) {
		const queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES (?, ?)`;

		connection.query(queryString, vals, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne() {},
};

module.exports = orm;
