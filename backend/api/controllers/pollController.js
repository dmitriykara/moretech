'use strict';

const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');

exports.getPolls = (req, res) => {
  Poll.find(
    { participants : { $elemMatch : { login: req.query.login.toString() }}},
    (err, polls) => {
      if (err) res.send(err);

      res.json(polls);
    }
  );
}

exports.addPoll = (req, res) => {
  Poll.create(req.body.poll, (err, _) => {
    if (err) res.send(err);

    res.sendStatus(200);
  });
}

exports.updatePoll = (req, res) => {
  Poll.updateOne({ id: req.body.poll.id }, req.body.poll, (err, _) => {
    if (err) res.send(err);

    res.sendStatus(200);
  });
}

exports.addAnswer = (req, res) => {
  Poll.findById(req.body.pollId, 'answers', (err, poll) => {
    if (err) res.send(err);

    poll.answers.create(req.body.answer, (err, _) => {
      if (err) res.send(err);

      res.sendStatus(200);
    });
  });
}

exports.updateAnswer = (req, res) => {
  Poll.update(
    {_id : req.body.pollId, answers : { $elemMatch : { user : req.body.answer.user }}},
    req.answer,
    (err, poll) => {
      if (err) res.send(err);

      res.sendStatus(200);
    }
  );
}

exports.closePoll = (poll) => {
  if (poll.answers.length > 0.5 * poll.users.length) {

    counter_agree = 0;
    counter_disagree = 0;

    for (let i = 0; i < poll.answers.length; i++) {
      if (poll.answers[i] == 1)
        counter_agree += 1;
      else
        counter_disagree += 1;
    }

    if (counter_agree > 0.5 * poll.users.length) {
      poll.status = "completed";
      poll.result = 1;
      Poll.updateOne({_id:poll._id}, poll, (err, _) => {
        if (err) console.log(err);
      });
    }

    if (counter_disagree > 0.5 * poll.users.length) {
      poll.status = "completed";
      poll.result = 0;
      Poll.updateOne({_id:poll._id}, poll, (err, _) => {
        if (err) console.log(err);
      });
    }
  }
}
