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

    // Fetch all candidates to rank them. Select email to identify unique users.
    const allCandidates = await User.find({ userType: "candidate" }).select("_id userName email profile");

    // Group candidates by unique email ID to eliminate duplicate entries caused by identical names
    const emailGroupMap = {};
    for (const cand of allCandidates) {
      if (!cand.email) continue;
      const emailLower = cand.email.toLowerCase();
      if (!emailGroupMap[emailLower]) {
        emailGroupMap[emailLower] = {
           id: cand._id,
           userName: cand.userName,
           email: emailLower,
           candidateIds: []
        };
      }
      emailGroupMap[emailLower].candidateIds.push(cand._id);
    }
    const uniqueCandidates = Object.values(emailGroupMap);

    // We need to fetch report data to compute total interviews and rating.
    // Since we aren't caching rating in the DB yet, we must compute it on the fly.
    // In a production app, the rating should ideally be a field on the User model updated per interview.
    
    const candidateStats = await Promise.all(
      uniqueCandidates.map(async (candidateGroup) => {
        // Fetch reports for all user instances sharing this email ID
        const reports = await Report.find({ candidateId: { $in: candidateGroup.candidateIds } });
        
        // Import computeUserRating logic from dashboardController
        // Due to circular dep constraints or structural limits, reproducing lightweight version here 
        // to avoid tight coupling. Ideally, this rating would be cached.
        let currentRating = 0;
           if (reports.length > 0) {
              const sortedReports = [...reports].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
              sortedReports.forEach((report) => {
                 let score = report.reportStructure?.overallScore || 0;
                 let delta = (score - 60) * 0.5;
   
                 if (report.reportStructure?.ResumeScore) {
                    delta += (report.reportStructure.ResumeScore - 50) / 10;
                 }
                 currentRating += Math.round(delta);
                 if (currentRating < 0) currentRating = 0;
              });
           }
   
           return {
             id: candidateGroup.id,
             userName: candidateGroup.userName,
             email: candidateGroup.email,
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
