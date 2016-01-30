var express = require('express');
var app=express();
var request=require('request');
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var fs = require("fs") ;
var eventproxy = require('eventproxy');
var targetUrl = 'http://www.weather.com.cn/weather/101040100.shtml';
function getdata() {
  app.get('/', function (req, res) {
    request('http://www.weather.com.cn/weather/101040100.shtml', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body);
        $ = cheerio.load(body);
        $('.c7d .clearfix ').each(function (idx, element) {
          res.send($(this).text());

        })
      }else{
        console.log('error !!!');

      }
    })
  });

}
exports.add=getdata;