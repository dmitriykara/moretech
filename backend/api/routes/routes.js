'use strict';

module.exports = function (app) {
  const controller = require('../controllers/controller');

  app.route('/users')
    .get(controller.getUsers)
  
  app.route('/polls')
    .get(controller.getPolls)
    .post(controller.addPoll)
    .put(controller.updatePoll)

  app.route('/answers')
    .post(controller.addAnswer)
    .put(controller.updateAnswer)
}