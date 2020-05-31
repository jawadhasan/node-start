const http = require('http');
var CountStream = require('./countstream');
var countStream = new CountStream('Jawad');// you can pass something else


//download Web-Page
http.get('http://hexquote.com/', function (res) {

    //Pipe the data from the website to countStream, thereby counting the text
    res.pipe(countStream);
});

countStream.on('total', function (count) {
    console.log('Total matches:', count);
});