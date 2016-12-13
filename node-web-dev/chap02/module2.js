var util=require('util');
var A="a different value A";
var B="a different value B";
var m1=require("./module1");
util.log('A='+A+' B='+B+ ' Values='+util.inspect(m1.values()));