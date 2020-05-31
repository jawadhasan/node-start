var fs = require('fs');
var CountStream = require('./countstream');
var countStream = new CountStream('person');// you can pass something else


//Create a readable stream of the file , and pipe the data through CountStream.
fs.createReadStream('quotes.json').pipe(countStream);


//The 'total' event will be emitted when the stream is finished.
countStream.on('total', function (count) {
    console.log('Total matches:', count);
});