//Dependencies
var express = require('express');
var app = express();

//Routes
app.get('/', function(req,res){
    res.send('Hello World ! Welcome to JingleBol');
});
//Listen to Port 3000
app.listen(3000,function(){
   console.log('App Running at Port 3000 ! ');
});


