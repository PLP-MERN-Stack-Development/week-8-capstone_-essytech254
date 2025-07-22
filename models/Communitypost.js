const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema({
  content: String,
  user: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CommunityPost', communityPostSchema);
