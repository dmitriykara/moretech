const mongoose = require('mongoose');

const PollExpirationSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  expireAt: Date,
  poll: { type: mongoose.Schema.Types.ObjectId, ref: 'Poll' },
});

PollExpirationSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });

// PollExpirationSchema.post('remove', poll => {
//   pollExpiration.create({
//     expiredAt: Date('2019-09-15T08:55:26'),
//     poll: poll.id,
//   });
//   console.log
// });

module.exports = mongoose.model('PollExpiration', PollExpirationSchema);