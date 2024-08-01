var express= require('express');
var app= express();
app.set('view engine','ejs');
app.get('views','./views');

app.set('/myway',function(req,res){
    res.render('index');
});
app.listen(4000);