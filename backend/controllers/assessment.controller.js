const Assessment = require("../models/assessment.model");
const CodingProblem = require("../models/codingProblem.js");
const Application = require("../models/application.js");

exports.createAssessment = async (req, res) => {
    try {
        const { jobId, questions, duration } = req.body;
        
        const assessment = await Assessment.create({
            job: jobId,
            questions,
            duration,
            recruiter: req.id
        });

        // Ensure all questions in the assessment are private and owned by the recruiter
        await CodingProblem.updateMany(
            { _id: { $in: questions } },
            { visibilityStatus: 'private', ownerId: req.id }
        );

        res.status(201).json({
            success: true,
            message: "Assessment created successfully",
            assessment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.getRecruiterAssessments = async (req, res) => {
    try {
        const assessments = await Assessment.find({ recruiter: req.id }).populate('job').populate('questions');
        res.status(200).json({
            success: true,
            assessments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.getAssessmentForCandidate = async (req, res) => {
    try {
        const { assessmentId } = req.params;
        const assessment = await Assessment.findById(assessmentId).populate('questions', 'title difficulty tags');
        
        if (!assessment) {
            return res.status(404).json({
                success: false,
                message: "Assessment not found"
            });
        }

        // Check if candidate has applied for the job
        const application = await Application.findOne({ 
            job: assessment.job, 
            applicant: req.id 
        });

        if (!application) {
            return res.status(403).json({
                success: false,
                message: "You must apply for this job to take the assessment"
            });
        }

        // Check if 24h window is open
        const now = new Date();
        if (assessment.startTime && now < assessment.startTime) {
            return res.status(403).json({
                success: false,
                message: "Assessment window hasn't opened yet"
            });
        }
        if (assessment.endTime && now > assessment.endTime) {
            return res.status(403).json({
                success: false,
                message: "Assessment window has closed"
            });
        }

        const CodingAssessmentReport = require("../models/codingAssessmentReport.model");
        const attempt = await CodingAssessmentReport.findOne({ assessment: assessmentId, candidate: req.id });

        if (attempt && (attempt.status === 'completed' || attempt.status === 'submitted')) {
            return res.status(403).json({
                success: false,
                message: "You have already submitted this assessment"
            });
        }

        res.status(200).json({
            success: true,
            assessment,
            startTime: attempt ? attempt.startTime : null
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.openAssessmentWindow = async (req, res) => {
    try {
        const { assessmentId } = req.params;
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + 24 * 60 * 60 * 1000); // 24 hours later

        const assessment = await Assessment.findByIdAndUpdate(assessmentId, {
            startTime,
            endTime,
            visibility: 'active'
        }, { new: true });

        res.status(200).json({
            success: true,
            message: "Assessment window opened for 24 hours",
            assessment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.submitAssessment = async (req, res) => {
    try {
        const { assessmentId, submissions } = req.body; // submissions: [{ problemId, code, passedCases, totalCases }]
        const candidateId = req.id;

        const assessment = await Assessment.findById(assessmentId);
        if (!assessment) return res.status(404).json({ success: false, message: "Assessment not found" });

        let totalScore = 0;
        let maxPossibleScore = 0;
        const submissionDocs = [];

        for (const sub of submissions) {
            totalScore += sub.passedCases || 0;
            maxPossibleScore += sub.totalCases || 0;
            
            submissionDocs.push({
                problem: sub.problemId,
                code: sub.code,
                language: sub.language,
                score: sub.passedCases,
                totalTestCases: sub.totalCases
            });
        }

        const CodingAssessmentReport = require("../models/codingAssessmentReport.model");
        const report = await CodingAssessmentReport.findOneAndUpdate(
            { assessment: assessmentId, candidate: candidateId },
            {
                submissions: submissionDocs,
                totalScore,
                maxPossibleScore,
                submitTime: new Date(),
                status: 'completed'
            },
            { new: true, upsert: true }
        );

        res.status(201).json({
            success: true,
            message: "Assessment submitted successfully",
            report
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.getAssessmentReports = async (req, res) => {
    try {
        const { assessmentId } = req.params;
        const CodingAssessmentReport = require("../models/codingAssessmentReport.model");
        
        // Fetch assessment to get the associated job ID
        const assessment = await Assessment.findById(assessmentId);
        if (!assessment) {
            return res.status(404).json({ success: false, message: "Assessment not found" });
        }

        const reports = await CodingAssessmentReport.find({ assessment: assessmentId })
            .populate('candidate', 'userName email profile')
            .populate('submissions.problem', 'title')
            .sort({ totalScore: -1 });

        // Link with applications to get current status
        const reportsWithStatus = await Promise.all(reports.map(async (report) => {
            const reportObj = report.toObject();
            const application = await Application.findOne({
                job: assessment.job,
                applicant: report.candidate._id
            });
            
            if (application) {
                reportObj.applicationId = application._id;
                reportObj.applicationStatus = application.status;
            }
            return reportObj;
        }));

        res.status(200).json({
            success: true,
            reports: reportsWithStatus
        });
    } catch (error) {
        console.error("[ASSESSMENT] Fetch reports error:", error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};

exports.startAssessmentAttempt = async (req, res) => {
    try {
        const { assessmentId } = req.params;
        const userId = req.id;

        const CodingAssessmentReport = require("../models/codingAssessmentReport.model");
        let report = await CodingAssessmentReport.findOne({ assessment: assessmentId, candidate: userId });

        if (!report) {
            report = await CodingAssessmentReport.create({
                assessment: assessmentId,
                candidate: userId,
                startTime: new Date(),
                status: 'in-progress'
            });
        }

        res.status(200).json({
            success: true,
            message: "Assessment attempt started",
            startTime: report.startTime
        });
    } catch (error) {
        console.error("[ASSESSMENT] Start attempt error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteAssessment = async (req, res) => {
    try {
        const { assessmentId } = req.params;
        const assessment = await Assessment.findById(assessmentId);

        if (!assessment) {
            return res.status(404).json({ success: false, message: "Assessment not found" });
        }

        // Verify that the recruiter deleting it is the one who created it
        if (assessment.recruiter.toString() !== req.id.toString()) {
            return res.status(403).json({ success: false, message: "Access denied. You can only delete your own assessments." });
        }

        await Assessment.findByIdAndDelete(assessmentId);

        res.status(200).json({
            success: true,
            message: "Assessment deleted successfully"
        });
    } catch (error) {
        console.error("[ASSESSMENT] Delete error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
