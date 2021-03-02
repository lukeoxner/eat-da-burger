// setting up dependencies
const orm = require('../config/orm.js');

const burger = {
	selectAll() {
		orm.all('burgers', (res) => cb(res));
	},
	insertOne() {},
	updateOne() {},
};

module.exports = burger;
