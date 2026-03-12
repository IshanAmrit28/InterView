const Job = require("../models/job.js");
const Company = require("../models/company.js");

// admin post krega job
exports.postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: salary,
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: req.user.company || companyId, // Prefer recruiter's assigned company
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// student k liye
exports.getAllJobs = async (req, res) => {
    try {
        const { keyword, location, company, experience, salary } = req.query;
        
        const query = { status: "active" };

        // Keyword Search (Title, Description, Location)
        if (keyword) {
            query.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { location: { $regex: keyword, $options: "i" } },
            ];
        }

        // Location Filter (Now expecting single string, but keeping split just in case)
        if (location) {
            const locations = location.split(",");
            query.location = { $in: locations.map(loc => new RegExp(loc, "i")) };
        }

        // Company Filter (Expecting Object IDs as comma-separated string)
        if (company) {
            const companies = company.split(",");
            query.company = { $in: companies };
        }

        // Experience Level Filter
        if (experience) {
            query.experienceLevel = { $regex: experience, $options: "i" };
        }

        // Salary Filter (Basic string match or range if needed)
        if (salary) {
            query.salary = { $regex: salary, $options: "i" };
        }

        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });

        if (!jobs || jobs.length === 0) {
            return res.status(200).json({
                jobs: [],
                message: "No jobs found matching your criteria.",
                success: true
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// student
exports.getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// admin kitne job create kra hai abhi tk
exports.getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ company: req.user.company })
            .populate({
                path: 'company',
                options: { sort: { createdAt: -1 } }
            })
            .populate({
                path: 'created_by',
                select: 'fullname userName'
            });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }
        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

exports.updateJobStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const jobId = req.params.id;

        if (!status || !['active', 'inactive'].includes(status)) {
            return res.status(400).json({
                message: "Valid status ('active' or 'inactive') is required.",
                success: false
            });
        }

        // Find the job and verify it belongs to the recruiter's company
        const job = await Job.findOne({ _id: jobId, company: req.user.company });
        if (!job) {
            return res.status(404).json({
                message: "Job not found or access denied.",
                success: false
            });
        }

        job.status = status;
        await job.save();

        return res.status(200).json({
            message: `Job status updated to ${status}.`,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Get all unique locations for active jobs
exports.getUniqueLocations = async (req, res) => {
    try {
        const locations = await Job.distinct("location", { status: "active" });
        return res.status(200).json({ locations, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Get all unique companies for active jobs
exports.getUniqueCompanies = async (req, res) => {
    try {
        // Fetch all companies from the database
        const companies = await Company.find({ status: "active" }).select('name _id logo');
        
        return res.status(200).json({ companies, success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
