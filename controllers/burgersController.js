// setting up dependencies
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
	burger.selectAll((data) => {
		const hbsObject = {
			burgers: data,
		};
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', (req, res) => {
	const name = req.body.burger_name;
	burger.insertOne(name, (result) => {
		res.json({ id: result.insertId });
	});
});

router.put('/api/burgers/:id', (req, res) => {
	const id = req.params.id;
	const devoured = req.body.devoured;

	burger.updateOne(devoured, id, (result) => {
		if (result.changedRows === 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

module.exports = router;
