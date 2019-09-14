'use strict';

module.exports = function (app) {
  const controller = require('../controllers/controller');

  app.route('/users')
    .get(controller.get_users)
  //.post(controller)
}