'use strict';

const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');
//const Answer = mongoose.model('Answer');

exports.getPolls = (req, res) => {
  Poll.find({ partitipants: req.login }, (err, user) => {
    if (err) res.send(err);

    res.json(user);
  });
}

exports.addPoll = (req, res) => {
  Poll.create(req.poll, (err, poll) => {
    if (err) res.send(err);

    res.sendStatus(200);
  });
}

exports.updatePoll = (req, res) => {
  Poll.updateOne({ id: req.poll.id }, req.poll, (err, poll) => {
    if (err) res.send(err);

    res.sendStatus(200);
  });
}

exports.addAnswer = (req, res) => {
  // Answer.create([req.answer], (err, answer) => {
  //   if (err) req.send(err);
  //   Poll.update(
  //     { id: req.answer.pollid },
  //     { $addToSet: { answers: req.answer.id } },
  //     (err, poll) => {
  //       if (err) res.send(err);
  //       res.sendStatus(200);
  //     });
  // });
  Poll.findById(req.pollId, 'answers', (err, poll) => {
    if (err) res.send(err);

    poll.answers.create(req.answer, (err, doc) => {
      if (err) res.send(err);

      res.sendStatus(200);
    });
  });
}

exports.updateAnswer = (req, res) => {
  // Answer.update({ id: req.answer.id }, req.answer, (err, answer) => {
  //   if (err)
  //     res.send(err);
  //   res.sendStatus(200);
  // });
  Poll.findById(req.pollId, 'answers', (err, poll) => {
    if (err) res.send(err);
    const answer = poll.answers.id(req.answer.id);

    answer.update(req.answer, (err, doc) => {
      if (err) res.send(err);

      res.sendStatus(200);
    });
  });
}
