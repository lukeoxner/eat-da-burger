// setting up dependencies
const connection = require('./connection.js');

// setting up the object relational mapping (ORM)
const orm = {
	selectAll(cb) {
		const queryString = 'SELECT * FROM burgers';
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne(vals, cb) {
		const queryString =
			'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)';

		connection.query(queryString, vals, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne(devoured, id, cb) {
		let queryString = 'UPDATE burgers SET devoured = ? WHERE id = ?';

		connection.query(queryString, [devoured], (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;
