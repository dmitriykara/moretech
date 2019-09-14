'use strict';

module.exports = function (app) {
  const controller = require('../controllers/controller');
  const answers_controller = require('../controllers/answers_controlles');
  const users_controller = require('../controllers/users_controlles');
  
  app.route('/polls')
    .get(controller.getPolls)
    .post(controller.addPoll)
    .put(controller.updatePoll)

  app.route('/answers')
    .post(answers_controller.addAnswer)
    .put(answers_controller.updateAnswer)

  app.route('/users')
    .get(users_controller.getUsers)
}