const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new review
router.post('/', async (req, res) => {
  const { userId, movieId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      userId,
      movieId,
      rating,
      comment,
    });

    const review = await newReview.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Other CRUD routes for reviews can be added similarly

module.exports = router;