const express = require('express');
const { createComment, getCommentsForPost } = require('../controllers/commentController');
const router = express.Router();

router.post('/', createComment);
router.get('/:postId', getCommentsForPost);

module.exports = router;
