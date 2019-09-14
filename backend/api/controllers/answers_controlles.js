'use strict';

const mongoose = require('mongoose');
const Poll = mongoose.model('Polls');
const Answer = mongoose.model('Answers');

exports.addAnswer = (req, res) => {
  Answer.insertMany([req.answer], (err, answer) => {
    if (err)
      req.send(err);
    Poll.update(
      {id:req.answer.pollid}, 
      {$addToSet: {answers: req.answer.id}}, 
      (err, poll) => {
        if (err)
          res.send(err);
        res.send("OK");
      });
  });
}

exports.updateAnswer = (req, res) => {
  Answer.update({id:req.answer.id}, req.answer, (err, answer) => {
    if (err)
      res.send(err);
    res.send("OK")
  });
}