'use strict';

const path = require('path');

const express = require('express');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
let _ = require('./api/models/poll');
//_ = require('./api/models/pollExpiration')
_ = require('./api/models/user');

const api = require('./api/routes/routes');

mongoose.connect('mongodb://127.0.0.1:27017/moretech', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', () => console.log('db connected'));

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`listening on port ${port}`));
