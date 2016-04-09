var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

// Get an item
router.get('/', function(req, res) {
  Grocery.find( function(err, items) {
    res.render('explore', { title: 'Grocery' });
  });
});

// Post an item
router.post('/', function(req, res) {
 new Grocery({
   category: req.body.category,
   brand: req.body.brand,
 }).save( function(err, explore) {
   res.redirect('/explore');
 });
});

module.exports = router;