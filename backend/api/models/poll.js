const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  answers: [
    {
      createdAt: { type: Date, default: Date.now },
      isFinal: Boolean,
      result: Boolean,
      text: String,
      user: String,
    }
  ],
  createdAt: { type: Date, default: Date.now },
  description: String,
  partitipants: [String],
  theme: String,
});

module.exports = mongoose.model('Poll', PollSchema);
