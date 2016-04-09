var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Search = mongoose.model('Search');

router.get('/', function(req, res) {
	Search.find( function( err, search) {
		res.send(search);
	});
});

