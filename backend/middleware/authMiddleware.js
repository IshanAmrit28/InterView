const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.token) {
        token = req.cookies.token;
    }

    if (!token) {
        console.log("[AUTH] No token found in headers or cookies");
        return res.status(401).json({ success: false, message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id || decoded.userId;
        req.user = await User.findById(userId).select("-password");
        req.id = userId;

        if (!req.user) {
            console.log("[AUTH] User not found for ID:", userId);
            return res.status(401).json({ success: false, message: "User not found" });
        }

        // Background heartbeat: Update updatedAt without blocking the request
        User.updateOne({ _id: userId }, { $set: { updatedAt: new Date() } }).catch(err => console.error("Heartbeat error:", err));

        next();
    } catch (error) {
        console.log("[AUTH] Token verification failed:", error.message);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

// Normalized role helper to prevent case-sensitivity bugs
const getRole = (user) => (user?.userType || "").toLowerCase().trim();

const isRecruiter = (req, res, next) => {
    if (getRole(req.user) === "recruiter") return next();
    res.status(403).json({ success: false, message: "Access denied. Recruiter only." });
};

const isSuperAdmin = (req, res, next) => {
    if (getRole(req.user) === "admin") return next();
    res.status(403).json({ success: false, message: "Access denied. Admin only." });
};

const isCandidate = (req, res, next) => {
    if (getRole(req.user) === "candidate") return next();
    res.status(403).json({ success: false, message: "Access denied. Candidate only." });
};

const isAdminOrRecruiter = (req, res, next) => {
    const role = getRole(req.user);
    if (role === "admin" || role === "recruiter") return next();
    res.status(403).json({ success: false, message: "Access denied. Requires Admin or Recruiter privileges." });
};

module.exports = { protect, isRecruiter, isSuperAdmin, isCandidate, isAdminOrRecruiter };