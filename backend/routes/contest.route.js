const express = require("express");
const router = express.Router();
const contestController = require("../controllers/contest.controller");
const { protect, isSuperAdmin } = require("../middleware/authMiddleware");

// Admin routes
router.post("/create", protect, isSuperAdmin, contestController.createContest);
router.get("/all", protect, isSuperAdmin, contestController.getAllContests);
router.put("/update/:id", protect, isSuperAdmin, contestController.updateContest);
router.delete("/delete/:id", protect, isSuperAdmin, contestController.deleteContest);

// Candidate routes
router.get("/visible", protect, contestController.getVisibleContests);
router.get("/:id", protect, contestController.getContestById);
router.get("/:id/rankings", protect, contestController.getContestRankings);
router.get("/:id/my-submissions", protect, contestController.getMyContestSubmissions);
router.post("/:id/finalize", protect, isSuperAdmin, contestController.finalizeContest);

module.exports = router;
