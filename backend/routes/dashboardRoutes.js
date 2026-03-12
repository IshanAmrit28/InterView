const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { protect } = require("../middleware/authMiddleware");

// @route   GET /api/dashboard/profile
// @desc    Get dashboard analytics for user
// @access  Private
router.get("/profile", protect, dashboardController.getDashboardData);

// @route   GET /api/dashboard/public/:id
// @desc    Get read-only public profile data for any user
// @access  Private
router.get("/public/:id", protect, dashboardController.getPublicProfile);

// @route   GET /api/dashboard/recruiter/stats
// @desc    Get recruiter metrics
// @access  Private (Recruiter)
const { isRecruiter } = require("../middleware/authMiddleware");
router.get("/recruiter/stats", protect, isRecruiter, dashboardController.getRecruiterStats);

module.exports = router;
