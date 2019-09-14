'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.addUser = (req, res) => {
  User.insertMany([req.user], (err, users) => {
    if (err)
      res.send(err);
    res.send("OK")
  });
}

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      res.send(err);
    res.json(users);
  });
}
