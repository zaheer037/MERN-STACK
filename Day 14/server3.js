var http = require('http');
var fs = require('fs');
http.createServer(
    function(req,res){
        fs.readFile('client.html',function(err, data){
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data);

        });
}
).listen(8080);