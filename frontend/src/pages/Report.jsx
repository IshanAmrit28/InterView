// frontend/src/pages/Report.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchReport } from "../services/interviewService";

import {
  Loader2,
  AlertCircle,
  TrendingUp,
  FileText,
  CheckCircle,
  XCircle,
  Briefcase,
} from "lucide-react";

const Report = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { reportId } = useParams();
  const navigate = useNavigate();

  const getScoreColor = (score) => {
    if (score >= 8) return "text-green-400 bg-green-900 border-green-700";
    if (score >= 6) return "text-yellow-400 bg-yellow-900 border-yellow-700";
    return "text-red-400 bg-red-900 border-red-700";
  };

  const getChanceColor = (chance) => {
    const chanceStr = String(chance || "");
    if (chanceStr.includes("Strong"))
      return "bg-green-600/30 text-green-400 border-green-500";
    if (chanceStr.includes("Consider"))
      return "bg-yellow-600/30 text-yellow-400 border-yellow-500";
    return "bg-red-600/30 text-red-400 border-red-500";
  };

  useEffect(() => {
    if (!reportId) {
      setError("No Report ID provided in URL.");
      setLoading(false);
      return;
    }

    const loadReport = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchReport(reportId);
        setReportData(data);
      } catch (err) {
        console.error("Error fetching report:", err);
        setError(err.message || "Failed to load report data.");
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [reportId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 w-full overflow-hidden">
        <div className="text-center">
          <Loader2
            size={48}
            className="animate-spin text-blue-500 mx-auto mb-4"
          />
          <p className="text-gray-400 text-xl">
            Generating AI Report, please wait...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 w-full overflow-hidden">
        <div className="bg-red-900/30 border border-red-500 rounded-xl p-10 max-w-lg shadow-2xl text-center mx-4">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-400 mb-3">
            Error Loading Report
          </h2>
          <p className="text-red-300 mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (!reportData || !reportData.reportStructure) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center bg-gray-900 w-full overflow-hidden">
        No complete report data found.
      </div>
    );
  }

  const rs = reportData.reportStructure;
  const allQuestions = Object.keys(rs)
    .filter((key) => Array.isArray(rs[key]))
    .flatMap((key) => rs[key].map((q) => ({ ...q, category: key })));

  const totalScoreSum = allQuestions.reduce(
    (sum, q) => sum + (q.aiScore || 0),
    0,
  );
  const avgScore =
    allQuestions.length > 0 ? totalScoreSum / allQuestions.length : 0;

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100 p-4 md:p-10 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-700 pb-6 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Interview Report: {reportData.role || "Technical Session"}
            </h1>
          </div>
          <button
            onClick={() => navigate("/practice")}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
          >
            Start New Practice
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp size={24} className="text-blue-400" />
              <span className="text-lg font-medium text-gray-300">
                Overall Score
              </span>
            </div>
            <p className="text-5xl font-extrabold text-blue-500">
              {rs.overallScore || "N/A"}
              <span className="text-2xl font-bold ml-1 text-blue-400">
                /100
              </span>
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <FileText size={24} className="text-purple-400" />
              <span className="text-lg font-medium text-gray-300">
                Resume Score
              </span>
            </div>
            <p className="text-5xl font-extrabold text-purple-500">
              {rs.ResumeScore || "N/A"}
              <span className="text-2xl font-bold ml-1 text-purple-400">
                /100
              </span>
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp size={24} className="text-yellow-400" />
              <span className="text-lg font-medium text-gray-300">
                Avg Q Score
              </span>
            </div>
            <p className="text-5xl font-extrabold text-yellow-500">
              {avgScore.toFixed(1)}
              <span className="text-2xl font-bold ml-1 text-yellow-400">
                /10
              </span>
            </p>
          </div>

          <div
            className={`rounded-xl p-6 border shadow-xl flex flex-col justify-between ${getChanceColor(
              rs.hiringChance,
            )}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle size={24} />
              <span className="text-lg font-medium">Hiring Decision</span>
            </div>
            <p className="text-3xl font-extrabold">
              {rs.hiringChance || "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <FeedbackSection
            title="Interview Performance Feedback"
            feedback={rs.feedbackOnInterviewAnswers}
          />
          <FeedbackSection
            title="Resume Alignment Feedback"
            feedback={rs.feedbackOnResume}
          />
        </div>

        <QuestionBreakdown
          questions={allQuestions}
          getScoreColor={getScoreColor}
        />
      </div>
    </div>
  );
};

const FeedbackSection = ({ title, feedback }) => {
  if (
    !feedback ||
    (!feedback.strengths?.length && !feedback.weaknesses?.length)
  )
    return null;

  return (
    <div className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">{title}</h2>

      {feedback.strengths && feedback.strengths.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={20} className="text-green-500" />
            <h3 className="font-semibold text-lg text-green-400">Strengths</h3>
          </div>
          <ul className="space-y-3 pl-4">
            {feedback.strengths.map((strength, idx) => (
              <li
                key={idx}
                className="text-gray-300 text-sm md:text-base list-disc pl-2"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      )}

      {feedback.weaknesses && feedback.weaknesses.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <XCircle size={20} className="text-red-500" />
            <h3 className="font-semibold text-lg text-red-400">
              Areas for Improvement
            </h3>
          </div>
          <ul className="space-y-3 pl-4">
            {feedback.weaknesses.map((weakness, idx) => (
              <li
                key={idx}
                className="text-gray-300 text-sm md:text-base list-disc pl-2"
              >
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const QuestionBreakdown = ({ questions, getScoreColor }) => {
  if (questions.length === 0) return null;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden shadow-2xl w-full overflow-x-auto">
      <h2 className="text-xl md:text-2xl font-bold text-white p-6 md:p-8">
        Question Breakdown (Score / 10)
      </h2>
      <div className="min-w-[800px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900/50 text-gray-400 text-xs md:text-sm uppercase tracking-wider border-b border-gray-700">
              <th className="px-4 md:px-8 py-4 font-semibold w-1/12">#</th>
              <th className="px-4 md:px-8 py-4 font-semibold w-2/12">
                Category
              </th>
              <th className="px-4 md:px-8 py-4 font-semibold w-7/12">
                Question Asked
              </th>
              <th className="px-4 md:px-8 py-4 font-semibold w-2/12 text-right">
                AI Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {questions.map((q, index) => (
              <tr
                key={index}
                className="hover:bg-gray-700/30 transition-colors"
              >
                <td className="px-4 md:px-8 py-4 md:py-5 text-gray-400">
                  {index + 1}
                </td>
                <td className="px-4 md:px-8 py-4 md:py-5 text-gray-300 font-medium capitalize">
                  {String(q.category || "").replace(" based question", "")}
                </td>
                <td className="px-4 md:px-8 py-4 md:py-5 text-white text-sm md:text-base">
                  {q.question}
                </td>
                <td className="px-4 md:px-8 py-4 md:py-5 text-right">
                  <span
                    className={`inline-flex items-center justify-center w-12 h-7 md:w-14 md:h-8 rounded-full text-xs md:text-sm font-bold border ${getScoreColor(
                      q.aiScore || 0,
                    )}`}
                  >
                    {q.aiScore || 0}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
