const express = require('express');
const router = express.Router();
const CommunityPost = require('../models/CommunityPost');

// POST /api/community
router.post('/', async (req, res) => {
  try {
    const { content, user } = req.body;
    const post = new CommunityPost({ content, user });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save post' });
  }
});

module.exports = router;
