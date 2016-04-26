var mongoose = require('mongoose');

var corgiSchema = {
  firstName: String,
  lastName, String,
  email, String,
  phone, String
}


var Corgi = mongoose.model('Corgi', corgiSchema);

module.exports = Corgi;
