'use strict';

const api = require('./api/routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


mongoose.connect('mongodb://localhost/moretech', {
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

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`listening on port ${port}`));
