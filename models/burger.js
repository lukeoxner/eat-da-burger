// setting up dependencies
const orm = require('../config/orm.js');

const burger = {
	selectAll(cb) {
		orm.selectAll((res) => cb(res));
	},
	insertOne(name, cb) {
		orm.insertOne(name, (res) => cb(res));
	},
	updateOne(devoured, id, cb) {
		orm.updateOne(devoured, id, (res) => cb(res));
	},
};

module.exports = burger;
