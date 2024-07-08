const mongoose = require('mongoose');

const SubredditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Subreddit', SubredditSchema);
