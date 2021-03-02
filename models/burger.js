// setting up dependencies
const orm = require('../config/orm.js');

const burger = {
	selectAll(cb) {
		orm.all((res) => cb(res));
	},
	insertOne(vals, cb) {
		orm.create(vals, (res) => cb(res));
	},
	updateOne(devoured, id, cb) {
		orm.update(devoured, id, (res) => cb(res));
	},
};

module.exports = burger;
