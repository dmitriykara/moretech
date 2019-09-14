'use strict';

const express = require('express')
const router = express.Router()

const pollController = require('../controllers/pollController');
const userController = require('../controllers/userController');

router.route('/polls')
  .get(pollController.getPolls)
  .post(pollController.addPoll)
  .put(pollController.updatePoll)

router.route('/answers')
  .post(pollController.addAnswer)
  .put(pollController.updateAnswer)

router.route('/users')
  .get(userController.getUsers)
  .post(userController.addUser)

module.exports = router;
