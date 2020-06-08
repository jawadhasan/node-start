const http = require('http');
var fs = require('fs');
const port = 3000;

http.createServer(function(req,res){

  fs.readFile('quotes.json', function(err, data){
      res.end(data);
  });

}).listen(port, ()=>{
    console.log(`server is listening on port: ${port}`);
});