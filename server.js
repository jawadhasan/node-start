const http = require('http');

const port = 3000;

http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world\n');    
}).listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
});