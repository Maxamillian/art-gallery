var express = require('express');
var path = require('path');
// var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/art-gallery');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.listen(8000, function () {
  console.log('listening on port 8000');
});

module.exports = app;