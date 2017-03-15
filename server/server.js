var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var homeModel = require('./home/homeModel.js');

var app = express();
app.use(express.static(__dirname + '/../client'));

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/api/posts/', function(req, res, next) {
  homeModel.find(function(err, posts) {
    if (err) {
      console.error('error:', err);
    } else {
      res.send(posts);
    }
  });
});

// app.get('/api/leaders', function(req, res, next) {
//   Leader.find(function (err, leaders) {
//     if (err) {
//       console.log('error trying to get data from db');
//     } else {
//       res.send(leaders);
//     }
//   });
// });

app.post('/api/posts/', function(req, res, next) {
  console.log('trying to post on server side');
  var imageUrl = req.body.url;
  var message = req.body.message;

  var post = new homeModel({
    url: imageUrl,
    message: message
  });

  post.save(function(error) {
    if (error) {
      console.error('I am', error);
    } else {
      res.status(200);
      res.end('saved to db!');
      next();
    }
  });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('listening');
});

module.exports = app;