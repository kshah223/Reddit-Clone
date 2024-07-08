const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  const { userId, postId, content } = req.body;
  try {
    const comment = new Comment({ userId, postId, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment', error: error.message });
  }
};

exports.getCommentsForPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error: error.message });
  }
};
