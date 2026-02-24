import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground"; // NEW IMPORT
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Chat from "./pages/Chat";
import Quiz from "./pages/Quiz";
import StudyPlan from "./pages/StudyPlan";
import TopicDetail from "./pages/TopicDetail";
// import Interview from './pages/Interview'
import Roadmap from "./pages/Roadmap";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobTracker from "./pages/JobTracker";
import CodingPractice from "./pages/CodingPractice";
import VideoFeed from "./pages/VideoFeed";
import "./Appmain.css";
import PracticeSetup from "./components/PracticeSetup";
import InterviewRoom from "./pages/Interview";
import Report from "./pages/Report";
function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const isInterview = location.pathname.startsWith("/interview");
  const hideNavbar = isLanding || isInterview;

  return (
    <div className="app">
      <AnimatedBackground />
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "main-content" : ""}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route path="/topic/:topicId" element={<TopicDetail />} />
          <Route path="/practice" element={<PracticeSetup />} />
          <Route path="/interview" element={<InterviewRoom />} />
          <Route path="/report/:reportId" element={<Report />} />
          <Route path="/report" element={<Report />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/job-tracker" element={<JobTracker />} />
          <Route path="/coding-practice" element={<CodingPractice />} />
          <Route path="/video-feed" element={<VideoFeed />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;
