'use strict';

module.exports = function (app) {
  const controller = require('../controllers/controller');
  const users_controller = require('../controllers/users_controller');
  
  app.route('/polls')
    .get(controller.getPolls)
    .post(controller.addPoll)
    .put(controller.updatePoll)

  app.route('/answers')
    .post(controller.addAnswer)
    .put(controller.updateAnswer)

  app.route('/users')
    .get(users_controller.getUsers)
}