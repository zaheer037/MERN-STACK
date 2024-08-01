var express=require('express');
var app=express();

app.get('/zaheer',function(req,res){
    res.send("welcome to express js world tested by zaheer,,,");
});
app.listen(3000);