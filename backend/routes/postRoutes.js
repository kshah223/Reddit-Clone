const express = require('express');
const { createPost, getSubredditPosts, upvotePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.get('/:subredditId/posts', getSubredditPosts);
router.post('/:id/upvote', upvotePost);

module.exports = router;
