var express = require('express');
var app=express();
var request=require('request');
var url = require('url'); //解析操作url
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var fs = require("fs") ;
var eventproxy = require('eventproxy');
//var targetUrl = 'http://www.weather.com.cn/weather/101040100.shtml';
function getdata(callback) {
     request('http://forex.hexun.com/rmbhl/#zkRate', function a(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        $ = cheerio.load(body);
          //console.log($('.color tbody '));
//    var    arr = new Array();
//var  bb=123;
//        $('#hot-list li').each(function (i, ele) {
//          var date = $('h1', this).text();
//          var status = $('.wea', this).text();
//          var tem = $('.tem', this).text();
//          var win = $('.win', this).text();
//          //console.log(win);
//          var obj = {
//            date: date,
//            status: status,
//            tem: tem,
//            wind: win
//          };
//          arr.push(obj);
//
//        });
//      callback(arr,error);
      }

    });
//return arr ;
}
exports.add=getdata;