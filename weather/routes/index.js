var express = require('express');
var router = express.Router();
var data=require('../config/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  data.add(function(err,res){
    if(err){
      console.log("1");
    }else{
      //res.render('article', { all: results });
      //res.render('login_in',{all:results});
      console.log("123")
    }
  });
  //console.log(da);
  res.render('index', { title: 'Express' });
});

module.exports = router;
