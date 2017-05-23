//For Express as a backend 

//Dependencies
var path = require('path');
var express = require('express');
var app = express();
//We need to add Favicon 

//Routes
app.get('/', function(req,res){
    res.send('Hello World !');
});
//Listen to Port 3000
app.listen(3000,function(){
   console.log('App Running at Port 3000 ! ');
});

/// Add Production and Development Settings


