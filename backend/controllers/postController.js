const mongoose = require('mongoose');
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { userId, subredditId, title, content } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(subredditId)) {
      return res.status(400).json({ message: 'Invalid userId or subredditId' });
    }
    const post = new Post({ userId, subredditId, title, content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};

exports.getSubredditPosts = async (req, res) => {
  const { subredditId } = req.params;
  try {
    const posts = await Post.find({ subredditId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

exports.upvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.upvotes += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error upvoting post', error: error.message });
  }
};
