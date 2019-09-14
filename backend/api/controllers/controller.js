'use strict';

var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.get_users = function (req, res) {
  Users.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}