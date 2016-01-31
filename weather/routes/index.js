var express = require('express');
var router = express.Router();
var data=require('../config/hot.js');

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
var timer=setInterval(function(){var data="data: time is"+new Date().toISOString()+"\r\n\r\n";
  //var content="data: ";
  res.write(data);},1000);});

router.get('/test', function(req, res, next) {
  //res.writeHead(200,
  //    {"Content-Type":"text/event-stream"
  //      //"Access-Control-Allow-Origin":"http://localhost/"
  //      });
  res.render('test',{message:"消息推送"});

});
module.exports = router;
