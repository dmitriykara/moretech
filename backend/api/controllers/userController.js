'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.addUser = (req, res) => {
  User.create(req.user, (err, _) => {
    if (err) res.send(err);

    res.sendStatus(200);
  });
}

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err);

    res.json(users);
  });
}
