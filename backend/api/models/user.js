const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  department: String,
  login: String,
  name: String,
});

module.exports = mongoose.model('Users', UserSchema);
