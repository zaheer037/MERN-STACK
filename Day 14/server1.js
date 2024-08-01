var zaheer=require('http');

zaheer.createServer(function(req,res){
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('Hello World!, I am Zaheer');
    res.end();
}).listen(8080);