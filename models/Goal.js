const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  startDate: String,
  goalDate: String,
  goalWeight: Number,
  user: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Goal', goalSchema);
