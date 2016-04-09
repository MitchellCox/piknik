<<<<<<< HEAD
=======
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('explore', { title: 'Piknik' });
});

module.exports = router;
>>>>>>> 38cd672b2612221c2599bce3244a29c13acce58b
