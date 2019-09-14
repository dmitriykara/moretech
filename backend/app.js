'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moretech', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', function () {
  console.log('db connected');
});

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
