var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

// Get an item
router.get('/', function(req, res) {
  Items.find( function(err, items) {
    res.render('explore', { title: 'Explore' });
  });
});

// Post an item
router.items('/', function(req, res) {
 new Items({
   title: req.body.title,
   content: req.body.content,
   color: req.body.color,
   updated_at: Date.now()
 }).save( function(err, explore) {
   res.redirect('/explore');
 });
});

module.exports = router;