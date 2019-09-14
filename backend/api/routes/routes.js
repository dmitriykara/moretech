'use strict';

module.exports = function (app) {
  const pollController = require('../controllers/pollController');
  const userController = require('../controllers/userController');

  app.route('/polls')
    .get(pollController.getPolls)
    .post(pollController.addPoll)
    .put(pollController.updatePoll)

  app.route('/answers')
    .post(pollController.addAnswer)
    .put(pollController.updateAnswer)

  app.route('/users')
    .get(userController.getUsers)
    .post(userController.addUser)
}