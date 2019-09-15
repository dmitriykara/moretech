const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  answers: [
    {
      isFinal: Boolean,
      result: Boolean,
      text: String,
      user: String,
    }
  ],
  description: String,
  partitipants: [String],
  theme: String,
});

module.exports = mongoose.model('Poll', PollSchema);
