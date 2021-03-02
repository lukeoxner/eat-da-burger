// setting up dependencies
const mysql = require('mysql');

// setting up connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	const connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'password',
		database: 'burger_db',
	});
}

// making connection
connection.connect((err) => {
	if (err) {
		throw err;
		return;
	} else {
		console.log('Connected!');
	}
});

module.exports = connection;
