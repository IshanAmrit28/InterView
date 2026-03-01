// backend/routes/adminRoutes.js
const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { protect, isSuperAdmin } = require("../middleware/authMiddleware");

// Apply authentication and super admin checks to all routes in this file
adminRouter.use(protect, isSuperAdmin);

// ==================== USER MANAGEMENT ====================
// Get all users (candidates & recruiters)
adminRouter.get("/users", adminController.getAllUsers);

// ==================== QUESTION MANAGEMENT ====================
// Add a new question
adminRouter.post("/questions", adminController.createQuestion);

// Delete a question
adminRouter.delete("/questions/:id", adminController.deleteQuestion);

// Update a question's category
adminRouter.put("/questions/:id/category", adminController.categorizeQuestion);

module.exports = adminRouter;
