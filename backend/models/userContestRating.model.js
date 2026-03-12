const mongoose = require("mongoose");

const userContestRatingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contest',
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    totalParticipants: {
        type: Number,
        required: true
    }
}, { 
    timestamps: true 
});

// Index for quick lookup of user's rating history and contest results
userContestRatingSchema.index({ user: 1, createdAt: -1 });
userContestRatingSchema.index({ contest: 1 });

module.exports = mongoose.model("UserContestRating", userContestRatingSchema);
