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

router.get('/time', function(req, res, next) {
  res.setHeader("Content-Type","text/event-stream");
      //"Access-Control-Allow-Origin":"http://localhost:3000/time"

  var datas="data: time is"+new Date().toISOString()+"\r\n\r\n";
  //var content="data: ";
  //res.render('time',{data:data});
    res.write(datas);
  });

router.get('/test', function(req, res, next) {
  //res.writeHead(200,
  //    {"Content-Type":"text/event-stream"
  //      //"Access-Control-Allow-Origin":"http://localhost/"
  //      });
  res.render('test',{some:1});

});
module.exports = router;
