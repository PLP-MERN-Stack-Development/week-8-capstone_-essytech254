const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// POST /api/goals
router.post('/', async (req, res) => {
  try {
    const { startDate, goalDate, goalWeight, user } = req.body;
    const goal = new Goal({ startDate, goalDate, goalWeight, user });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save goal' });
  }
});

module.exports = router;
