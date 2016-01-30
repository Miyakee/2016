var express = require('express');
var router = express.Router();
var data=require('../config/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var da=data.add();
  //console.log(da);
  res.render('index', { title: 'Express' });
});

module.exports = router;
