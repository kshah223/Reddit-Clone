const User = require('../models/User');
const Subreddit = require('../models/Subreddit');

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('subscriptions').populate('upvotes');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error: error.message });
  }
};

exports.subscribeToSubreddit = async (req, res) => {
  const { userId, subredditId } = req.params;
  try {
    const user = await User.findById(userId);
    const subreddit = await Subreddit.findById(subredditId);
    if (!user || !subreddit) {
      return res.status(404).json({ message: 'User or Subreddit not found' });
    }
    user.subscriptions.push(subredditId);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error subscribing to subreddit', error: error.message });
  }
};
