var mongoose = require('mongoose');

mongoose.connect(process.env.PORT || 'mongodb://localhost/art-gallery');

var db = mongoose.connection;
db.on('open', function() {
  console.log('Mongoose connected!');
}).on('error', function(error) {
  console.error('I am', error);
});

var HomeSchema = new mongoose.Schema({
  url: String,
  message: String,
  likes: Number
});


module.exports = mongoose.model('Home', HomeSchema);