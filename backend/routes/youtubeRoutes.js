const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');

// Search videos route
router.get('/search', youtubeController.searchVideos);

module.exports = router;
