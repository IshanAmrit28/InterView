const express = require("express");
const jobController = require("../controllers/job.controller.js");
const { protect, isRecruiter } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/post", protect, isRecruiter, jobController.postJob);
router.get("/get", jobController.getAllJobs);
router.get("/getadminjobs", protect, isRecruiter, jobController.getAdminJobs);

// Filters
router.get("/filters/locations", jobController.getUniqueLocations);
router.get("/filters/companies", jobController.getUniqueCompanies);

router.get("/get/:id", protect, jobController.getJobById);
router.put("/status/:id", protect, isRecruiter, jobController.updateJobStatus);
router.delete("/delete/:id", protect, isRecruiter, jobController.deleteJob);

module.exports = router;
