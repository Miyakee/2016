var express = require('express');
var app=express();
var request=require('request');
var url = require('url'); //��������url
var superagent = require('superagent'); //�������ⲿ������Ҫ����npm install
var cheerio = require('cheerio');
var fs = require("fs") ;
var eventproxy = require('eventproxy');
var targetUrl = 'http://www.weather.com.cn/weather/101040100.shtml';
app.get('/',function(req,res){
    request('http://www.weather.com.cn/weather/101040100.shtml',function(error,response,body){
if(!error&&response.statusCode==200){
    //console.log(body);
    $ = cheerio.load(body);
    //res.json({
    //    'date':$('.clearfix .sky').length
    //});
    //res.send($('.clearfix .sky').length);

    $('.c7d .clearfix ').each(function(idx,element){
        res.send($(this).text());
        //res.send(element.value);

    })
}
    })
});
app.listen(3000);
//superagent.get(targetUrl)
//    .end(function (err, res) {
//        //console.log(res);
//        fs.writeFile("res.txt",res,function (err) {
//            if (err) throw err ;
//            console.log("File Saved !"); //�ļ�������
//        }) ;
//    });
//var $ = cheerio.load('res.txt');
////ͨ��CSS selector��ɸѡ����
//$('.clearfix li h1').each(function (idx, element) {
//    console.log(element);
//});

//var fs = require("fs") ;
//var txt = "���Ҫ�ú�ѧϰNodeJS��������" ;
//д���ļ�

