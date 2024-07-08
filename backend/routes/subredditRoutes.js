const express = require('express');
const { createSubreddit, getSubreddits, getSubredditPosts } = require('../controllers/subredditController');
const router = express.Router();

router.post('/create', createSubreddit);
router.get('/', getSubreddits); // Add this line to get all subreddits
router.get('/:id/posts', getSubredditPosts);

module.exports = router;
