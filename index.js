var fs = require('fs');
var pdf = require('html-pdf');
var requests = require('request');

var options = {
    format: 'Letter'
};

var url = "http://www.google.com";

requests.get(url,function(err,res,bod){
    if (err) return console.log(err);
    pdf.create(bod, options).toFile('./sample.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });
});

