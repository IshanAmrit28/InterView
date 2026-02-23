// frontend/src/components/PracticeSetup.jsx
import React, { useState, useRef } from "react";
import { X, Upload, Play, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startInterview } from "../services/interviewService";
import PageHeader from "../components/PageHeader";
import "./PracticeSetup.css"; // Import the custom GUI styles

// HARDCODED CANDIDATE ID (FOR DEMO ONLY)
const CANDIDATE_ID = "6912c711cabf1fe8c3bd941c";

const PracticeSetup = () => {
  const [role, setRole] = useState("Software Engineer");
  const [jobDescription, setJobDescription] = useState(
    "We are looking for an experienced developer proficient in MERN stack and data structures.",
  );
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Hardcoded navigation to mock the dashboard exit
  const onClose = () => navigate("/interview");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
    setError(null);
  };

  const handleStart = async (e) => {
    e.preventDefault();
    setError(null);

    if (!role || !jobDescription || !resumeFile) {
      setError("Please fill all fields and upload a resume.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("candidateId", CANDIDATE_ID);
      formData.append("role", role);
      formData.append("jobDescription", jobDescription);
      formData.append("resumeFile", resumeFile);

      const result = await startInterview(formData);

      // Navigate to the interview room, passing the critical data
      navigate("/interview", {
        state: {
          reportId: result.reportId,
          reportStructure: result.reportStructure,
        },
      });
    } catch (err) {
      console.error("Interview Start Failed:", err);
      // Using alert() replacement for quick user feedback
      setError(err.message || "Failed to start interview. Check API status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="setup-container">
      {/* Decorative background elements */}
      <div className="orb-1"></div>
      <div className="orb-2"></div>

      <div className="setup-card">
        <button onClick={onClose} className="btn-close" aria-label="Close setup">
          <X size={26} />
        </button>
        
        <div className="setup-header">
          <h1 className="setup-title">Prepare for Your Interview</h1>
          <p className="setup-subtitle">Provide details to tailor your AI interview session</p>
        </div>

        {error && (
          <div className="error-alert">
            <span className="error-icon">⚠️</span> 
            <span>{error}</span>
          </div>
        )}

        <form className="setup-form" onSubmit={handleStart}>
          {/* Role Input */}
          <div className="form-group">
            <label className="form-label">Target Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior Frontend Engineer"
              className="form-input"
              required
            />
          </div>

          {/* Job Description */}
          <div className="form-group">
            <label className="form-label">Job Description (JD)</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here so we can ask relevant questions..."
              className="form-textarea"
              required
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div className="form-group">
            <label className="form-label">Upload Resume</label>
            <p className="form-helper">PDF or DOCX format, up to 10MB.</p>
            <div
              className={`upload-area ${resumeFile ? "has-file" : ""}`}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                style={{ display: "none" }}
              />
              <div className="upload-icon-wrapper">
                <Upload size={40} />
              </div>
              {resumeFile ? (
                <div>
                  <p className="upload-text-main">{resumeFile.name}</p>
                  <p className="upload-text-sub">Ready to upload</p>
                </div>
              ) : (
                <p className="upload-text-default">Click to browse or drag & drop</p>
              )}
            </div>
          </div>

          {/* Start Button */}
          <button
            type="submit"
            className="btn-start"
            disabled={loading}
          >
            <div className="btn-shine"></div>
            {loading ? (
              <>
                <Loader2 size={24} className="spinner" />
                Initializing AI Interviewer...
              </>
            ) : (
              <>
                <Play size={24} fill="currentColor" />
                Start Interview Now
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PracticeSetup;
