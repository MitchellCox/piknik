var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About' });
});

module.exports = router; 