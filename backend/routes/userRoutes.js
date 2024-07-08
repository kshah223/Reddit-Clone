const express = require('express');
const { createUser, getUserProfile, subscribeToSubreddit } = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser);
router.get('/:id', getUserProfile);
router.post('/:userId/subscribe/:subredditId', subscribeToSubreddit);

module.exports = router;
