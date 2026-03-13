const mongoose = require("mongoose");

const contestRankingSchema = new mongoose.Schema({
    contest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contest',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    solvedProblems: [{
        problem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CodingProblem'
        },
        points: Number,
        submittedAt: Date,
        penalty: Number // time in seconds since contest start
    }],
    totalPoints: {
        type: Number,
        default: 0
    },
    totalTime: {
        type: Number,
        default: 0 // Duration from contest start to last accepted submission (in seconds)
    }
}, { 
    timestamps: true 
});

// Index for efficient ranking retrieval
contestRankingSchema.index({ contest: 1, totalPoints: -1, totalTime: 1 });

module.exports = mongoose.model("ContestRanking", contestRankingSchema);
