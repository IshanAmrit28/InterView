const Contest = require("../models/contest.model");
const Assessment = require("../models/assessment.model");
const CodingProblem = require("../models/codingProblem");

/**
 * Background task to automatically update the visibilityStatus of questions
 * once their associated contest or assessment has ended.
 */
const startCleanupTask = () => {
    console.log("[CLEANUP] Starting visibility cleanup task...");
    
    // Run every 5 minutes
    setInterval(async () => {
        try {
            const now = new Date();
            console.log(`[CLEANUP] Running at ${now.toISOString()}`);

            // 1. Cleanup Contests
            const endedContests = await Contest.find({
                endTime: { $lt: now }
            });

            for (const contest of endedContests) {
                if (contest.questions && contest.questions.length > 0) {
                    const result = await CodingProblem.updateMany(
                        { 
                            _id: { $in: contest.questions },
                            visibilityStatus: 'contest' 
                        },
                        { visibilityStatus: 'public' }
                    );
                    if (result.modifiedCount > 0) {
                        console.log(`[CLEANUP] Updated ${result.modifiedCount} questions from contest "${contest.title}" to public.`);
                    }
                }
            }

            // 2. Cleanup Assessments
            const endedAssessments = await Assessment.find({
                endTime: { $lt: now }
            });

            for (const assessment of endedAssessments) {
                if (assessment.questions && assessment.questions.length > 0) {
                    const result = await CodingProblem.updateMany(
                        { 
                            _id: { $in: assessment.questions },
                            visibilityStatus: 'private' 
                        },
                        { visibilityStatus: 'public' }
                    );
                    if (result.modifiedCount > 0) {
                        console.log(`[CLEANUP] Updated ${result.modifiedCount} questions from assessment for job ID ${assessment.job} to public.`);
                    }
                }
            }

        } catch (error) {
            console.error("[CLEANUP] Error in visibility cleanup task:", error);
        }
    }, 5 * 60 * 1000); // 5 minutes
};

module.exports = {
    startCleanupTask
};
