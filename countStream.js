const Writable = require('stream').Writable;
const util = require('util');
//use util.inherits to derive from stream.Writable and implement the required _write method. 

//Inherit from Writeable stream
util.inherits(CountStream, Writable);

function CountStream(matchText, options) {
    Writable.call(this, options);
    this.count = 0;

    //Create  RegExp object that matches globlly and ignores case
    this.matcher = new RegExp(matchText, 'ig');
}

//implementing required _write method
CountStream.prototype._write = function (chunk, encoding, cb) {

    //convert the current chunk of input into  string and use it to count matches
    var matches = chunk.toString().match(this.matcher);
    if (matches) {
        this.count += matches.length;
    }
    cb();
}

//when the countstream has ended, "publish" the total no of matches 
CountStream.prototype.end = function () {
    this.emit('total', this.count);
};

module.exports = CountStream;