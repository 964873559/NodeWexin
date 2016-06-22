//加载express框架
var express = require('express');
//加载路径
var path = require('path');

var app = express();

//服务器开启
server = require('http').Server(app);
//设置视图
app.set('views',__dirname);
//设置模板加载引擎
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
//配置路由文件
require('./index')(app);
server.listen(2333,function () {
	console.log('App start,port 2333.');
})