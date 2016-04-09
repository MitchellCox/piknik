var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

router.get('/', function(req, res) {
  Grocery.find( function( err, grocery) {
    res.send(grocery);
  });
});

module.exports = router;