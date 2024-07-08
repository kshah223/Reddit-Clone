const express = require('express');
const router = express.Router();

router.use('/users', require('./userRoutes'));
router.use('/subreddits', require('./subredditRoutes'));
router.use('/posts', require('./postRoutes'));
router.use('/comments', require('./commentRoutes'));

module.exports = router;
