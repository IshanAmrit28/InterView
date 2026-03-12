const mongoose = require('mongoose');
require('dotenv').config();

const CodingProblem = require('../models/codingProblem');
const User = require('../models/user');
const Contest = require('../models/contest.model');
const Assessment = require('../models/assessment.model');
const { canUserAccessProblem } = require('./visibilityHelper');

async function verify() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");

        // 1. Create Mock Data
        const adminUser = { _id: new mongoose.Types.ObjectId(), userType: 'admin' };
        const recruiterUser = { _id: new mongoose.Types.ObjectId(), userType: 'recruiter' };
        const candidateUser = { _id: new mongoose.Types.ObjectId(), userType: 'candidate' };

        console.log("\n--- Testing Visibility Access Helper ---");

        // Public Problem
        const publicProblem = { visibilityStatus: 'public' };
        console.log("Public Problem (Candidate):", await canUserAccessProblem(publicProblem, candidateUser)); // Should be true

        // Private Problem (Owned by Recruiter)
        const privateProblem = { 
            visibilityStatus: 'private', 
            ownerId: recruiterUser._id 
        };
        console.log("Private Problem (Owner Recruiter):", await canUserAccessProblem(privateProblem, recruiterUser)); // Should be true
        console.log("Private Problem (Other Recruiter):", await canUserAccessProblem(privateProblem, { _id: new mongoose.Types.ObjectId(), userType: 'recruiter' })); // Should be false
        console.log("Private Problem (Admin):", await canUserAccessProblem(privateProblem, adminUser)); // Should be true
        console.log("Private Problem (Candidate):", await canUserAccessProblem(privateProblem, candidateUser)); // Should be false

        // Contest Problem
        const contestProblemId = new mongoose.Types.ObjectId();
        const contestProblem = { _id: contestProblemId, visibilityStatus: 'contest' };
        
        console.log("Contest Problem (Candidate, No Active Contest):", await canUserAccessProblem(contestProblem, candidateUser)); // Should be false

        // Create a mock active contest
        const now = new Date();
        const activeContest = new Contest({
            title: "Test Contest",
            description: "Test",
            startTime: new Date(now.getTime() - 1000 * 60 * 60), // started 1 hour ago
            endTime: new Date(now.getTime() + 1000 * 60 * 60),   // ends in 1 hour
            questions: [contestProblemId],
            createdBy: adminUser._id
        });
        await activeContest.save();
        console.log("Created Active Contest");

        console.log("Contest Problem (Candidate, Active Contest):", await canUserAccessProblem(contestProblem, candidateUser)); // Should be true

        // Clean up mock contest
        await Contest.deleteOne({ _id: activeContest._id });
        console.log("Cleaned up Mock Contest");

        console.log("\n--- Verification Complete ---");
        
    } catch (error) {
        console.error("Verification failed:", error);
    } finally {
        await mongoose.connection.close();
    }
}

verify();
