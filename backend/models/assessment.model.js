const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CodingProblem'
    }],
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startTime: {
        type: Date,
        description: "When the assessment window starts (e.g., job application closure)"
    },
    endTime: {
        type: Date,
        description: "When the 24-hour window ends"
    },
    duration: {
        type: Number,
        default: 120, // in minutes (e.g., 2 hours)
        required: true
    },
    visibility: {
        type: String,
        enum: ['draft', 'active', 'closed'],
        default: 'draft'
    }
}, { 
    timestamps: true 
});

module.exports = mongoose.model("Assessment", assessmentSchema);
