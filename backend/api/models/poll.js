const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  answers: [
    {
      isFinal: Boolean,
      result: Boolean,
      text: String,
      user: mongoose.Schema.Types.ObjectId,
    }
  ],
  description: String,
  partitipants: [mongoose.Schema.Types.ObjectId],
  theme: String,
});

module.exports = mongoose.model('Polls', PollSchema);
