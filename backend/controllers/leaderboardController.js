//backend\controllers\leaderboardController.js
const User = require("../models/user");
const Report = require("../models/reportModel");

// @desc    Get Global Leaderboard
// @route   GET /api/leaderboard
// @access  Private
const getLeaderboard = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    // Fetch all candidates to rank them
    const allCandidates = await User.find({ userType: "candidate" }).select("_id userName profile");

    // We need to fetch report data to compute total interviews and rating.
    // Since we aren't caching rating in the DB yet, we must compute it on the fly.
    // In a production app, the rating should ideally be a field on the User model updated per interview.
    
    const candidateStats = await Promise.all(
      allCandidates.map(async (candidate) => {
        const reports = await Report.find({ user: candidate._id });
        
        // Import computeUserRating logic from dashboardController
        // Due to circular dep constraints or structural limits, reproducing lightweight version here 
        // to avoid tight coupling. Ideally, this rating would be cached.
        let currentRating = 1200;
           if (reports.length > 0) {
              const sortedReports = [...reports].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
              sortedReports.forEach((report) => {
                 let score = report.reportStructure?.overallScore || 0;
                 let delta = (score - 60) * 0.5;
   
                 if (report.reportStructure?.ResumeScore) {
                    delta += (report.reportStructure.ResumeScore - 50) / 10;
                 }
                 currentRating += Math.round(delta);
                 if (currentRating < 800) currentRating = 800;
              });
           }
   
           return {
             id: candidate._id,
             userName: candidate.userName,
             rating: currentRating,
             totalInterviews: reports.length,
           };
         })
       );
   
       // Sort descending by rating
       candidateStats.sort((a, b) => b.rating - a.rating);
   
       // Assign Ranks and map to a rigid structure
       const rankedCandidates = candidateStats.map((c, index) => ({
         ...c,
         rank: index + 1
       }));
   
       const totalPages = Math.ceil(rankedCandidates.length / limit);
       const paginatedResults = rankedCandidates.slice(skip, skip + limit);
   
       res.json({
         success: true,
         data: {
           leaderboard: paginatedResults,
           currentPage: page,
           totalPages: totalPages,
           totalUsers: rankedCandidates.length
         }
       });

  } catch (error) {
    console.error("Leaderboard Error:", error);
    res.status(500).json({ success: false, message: "Server error fetching leaderboard" });
  }
};

module.exports = {
  getLeaderboard
};
