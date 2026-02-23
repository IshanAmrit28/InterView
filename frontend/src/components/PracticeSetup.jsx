// frontend/src/components/PracticeSetup.jsx
import React, { useState, useRef } from "react";
import { X, Upload, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startInterview } from "../services/interviewService";
import PageHeader from "../components/PageHeader";
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
  const onClose = () => navigate("/");

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
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950 font-sans text-gray-100 min-w-[1280px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col rounded-2xl bg-gray-900/60 backdrop-blur-xl p-10 shadow-2xl border border-gray-700/50">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-2">
            Prepare for Your Interview
          </h1>
          <p className="text-gray-400 text-lg">Provide details to tailor your AI interview session</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-500/50 text-red-200 rounded-xl text-sm font-medium flex items-center">
            <span className="mr-2">⚠️</span> {error}
          </div>
        )}

        <form className="w-full space-y-8" onSubmit={handleStart}>
          {/* Role Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider ml-1">
              Target Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior Frontend Engineer"
              className="h-14 w-full rounded-xl border border-gray-700/70 bg-gray-800/80 px-5 text-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
              required
            />
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider ml-1">
              Job Description (JD)
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here so we can ask relevant questions..."
              className="h-40 w-full resize-y rounded-xl border border-gray-700/70 bg-gray-800/80 p-5 font-mono text-base text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all leading-relaxed"
              required
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider ml-1">
              Upload Resume
            </label>
            <p className="text-xs text-gray-500 ml-1 mb-2">PDF or DOCX format, up to 10MB.</p>
            <div
              className={`flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed px-6 py-10 cursor-pointer transition-all ${
                resumeFile ? "border-green-500/50 bg-green-500/5 hover:bg-green-500/10" : "border-gray-600 bg-gray-800/50 hover:border-blue-400 hover:bg-gray-800"
              }`}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <Upload size={36} className={resumeFile ? "text-green-400" : "text-blue-400"} />
              {resumeFile ? (
                <div className="text-center">
                  <p className="text-lg font-bold text-green-300">
                    {resumeFile.name}
                  </p>
                  <p className="text-sm text-green-500/70">Ready to upload</p>
                </div>
              ) : (
                <p className="text-base font-medium text-gray-400">
                  Click to browse or drag & drop.
                </p>
              )}
            </div>
          </div>

          {/* Start Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="group relative h-14 w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-xl font-bold text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)] disabled:from-gray-700 disabled:to-gray-700 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed overflow-hidden"
              disabled={loading}
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:translate-x-full transition-transform duration-500 -translate-x-full skeleton-shine"></div>
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Initializing AI Interviewer...
                </>
              ) : (
                <>
                  <Play className="fill-white" size={22} />
                  Start Interview Now
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PracticeSetup;
