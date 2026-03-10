//backend\routes\userRoutes.js
const express = require("express");
const userRouter = express.Router();
const authController = require("../controllers/authController");

// ==================== AUTH ROUTES ====================

// Signup route (with validation)
userRouter.post("/signup", authController.signup);

// Login route
userRouter.post("/login", authController.login);

// Logout route
userRouter.post("/logout", authController.logout);

// Update route (Private)
const { protect } = require("../middleware/authMiddleware");
const { singleUpload, multiUpload } = require("../middleware/multer");

userRouter.put("/update", protect, multiUpload, authController.updateProfile);

// Job board routes
userRouter.post("/register", singleUpload, authController.register);
userRouter.post("/profile/update", protect, multiUpload, authController.updateProfile);

module.exports = userRouter;
