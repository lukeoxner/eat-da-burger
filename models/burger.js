// setting up dependencies
const orm = require('../config/orm.js');

const burger = {
	selectAll(cb) {
		orm.all((res) => cb(res));
	},
	insertOne(vals, cb) {
		orm.create(vals, (res) => cb(res));
	},
	updateOne(vals, id, cb) {
		orm.update(vals, id, (res) => cb(res));
	},
};

module.exports = burger;
