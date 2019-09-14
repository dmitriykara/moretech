const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  theme: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Polls', PollSchema);
