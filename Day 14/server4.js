var http = require('http');
var uc = require('upper-Case');
http.createServer(
    function(req,res){
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(uc.uppercase("wish you all success"));
            res.end();
}
).listen(8080);