import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Chat from "./pages/Chat";
import Quiz from "./pages/Quiz";
import StudyPlan from "./pages/StudyPlan";
import TopicDetail from "./pages/TopicDetail";
import Roadmap from "./pages/Roadmap";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import JobTracker from "./pages/JobTracker";
import CodingPractice from "./pages/CodingPractice";
import VideoFeed from "./pages/VideoFeed";
import PracticeSetup from "./components/PracticeSetup";
import InterviewRoom from "./pages/Interview";
import Report from "./pages/Report";

import "./Appmain.css";

function AppContent() {
  const location = useLocation();

  const isLanding = location.pathname === "/";
  const isInterview = location.pathname.startsWith("/interview");
  const hideNavbar = isLanding || isInterview;

  return (
    <div
      className="app"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🔵 BACKGROUND LAYER */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <AnimatedBackground />
      </div>

      {/* 🟢 FOREGROUND CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
        }}
      >
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
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/job-tracker" element={<JobTracker />} />
            <Route path="/coding-practice" element={<CodingPractice />} />
            <Route path="/video-feed" element={<VideoFeed />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
}

export default App;
