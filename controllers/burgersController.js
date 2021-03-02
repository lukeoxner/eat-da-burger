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

router.post();

router.put();

module.exports = router;
