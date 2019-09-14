const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
  theme: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  partitipants: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  answers: {
    type: [
      {
        user: mongoose.Schema.Types.ObjectId,
        text: String,
        result: Boolean,
        is_final: Boolean,
      }
    ]
  }
});

module.exports = mongoose.model('Polls', PollSchema);
