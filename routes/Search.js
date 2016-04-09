var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

router.get('/', function(req, res) {
	Grocery.find( function( err, grocery) {
		res.render('grocery');
	});
});

router.put('/:id', function(req, res, next) {
	Grocery.findByIdAndUpdate(
		req.params.id,
		{ $set: { content: req.body.content }},
		function (err, grocery) {
			res.json(grocery);
		});
});


module.exports = router;

