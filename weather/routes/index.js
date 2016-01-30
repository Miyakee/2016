var express = require('express');
var router = express.Router();
var data=require('../config/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var da=data.add(function(arr,err){
    res.render('index',  {all:arr});
    //console.log(arr);

  });
});

module.exports = router;
