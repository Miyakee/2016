var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var requrl='http://www.weather.com.cn/weather/101040100.shtml';
request(requrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);    //返回请求页面的HTML
    }
});