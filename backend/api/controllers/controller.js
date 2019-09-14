'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.get_users = function (req, res) {
  User.find({}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
}