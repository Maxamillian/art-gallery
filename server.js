var express = require('express');
var path = require('path');
// var mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/art-gallery');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening');
});

module.exports = app;