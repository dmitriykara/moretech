const mongoose = require('mongoose');

const pollExpiration = mongoose.model('PollExpiration');

const PollSchema = new mongoose.Schema({
  answers: [
    {
      createdAt: { type: Date },
      isFinal: Boolean,
      result: Boolean,
      text: String,
      user: String,
    }
  ],
  createdAt: { type: Date },
  deadline: Date,
  completedDate: Date,
  description: String,
  partitipants: [
    {
      login: String,
      isRequired: Boolean,
    }
  ],
  status: { type: String, enum: ['completed', 'open', 'precompleted'] },
  result: Boolean,
  title: String,
});

PollSchema.post('save', poll => {
  pollExpiration.create({
    createdAt: poll.createdAt,
    expireAt: Date('2019-09-15T09:28:26'),
    poll: poll.id,
  });
  console.log
});

module.exports = mongoose.model('Poll', PollSchema);
