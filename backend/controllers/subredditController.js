const Subreddit = require('../models/Subreddit');
const Post = require('../models/Post');

exports.createSubreddit = async (req, res) => {
  const { name, description } = req.body;
  const subreddit = new Subreddit({ name, description });
  await subreddit.save();
  res.status(201).json(subreddit);
};

exports.getSubreddits = async (req, res) => {
  const subreddits = await Subreddit.find();
  res.status(200).json(subreddits);
};

exports.getSubredditPosts = async (req, res) => {
  const { id } = req.params;
  const posts = await Post.find({ subredditId: id }).sort({ createdAt: -1 });
  res.status(200).json(posts);
};
