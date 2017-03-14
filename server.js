var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(express.static(__dirname + '/client'));

mongoose.connect('mongodb://localhost/art-gallery');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening');
});

module.exports = app;