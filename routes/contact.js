var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

module.exports = router;