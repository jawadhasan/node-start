const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const port = 3000;

http.createServer(function(req,res){

  //set header, so browser know that gzip compression is being used.
  res.writeHead(200, {'content-encoding': 'gzip'});

  fs.createReadStream('quotes.json')
  .pipe(zlib.createGzip())
  .pipe(res);

}).listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
});