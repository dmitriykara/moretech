'use strict';

const mongoose = require('mongoose');
const Poll = mongoose.model('Polls');

exports.getPolls = (req, res) => {
  Poll.find({partitipants:req.user.id}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
}

exports.addPoll = (req, res) => {
  Poll.insertMany([req.poll], (err, polls) => {
    if (err)
      res.send(err);
    res.send("OK");
  });
}

exports.updatePoll = (req, res) => {
  Poll.update({id:req.poll.id}, req.poll, (err, poll) => {
    if (err)
      res.send(err);
    res.send("OK");
  });
}
