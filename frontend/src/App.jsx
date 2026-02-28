import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  const isInterview = location.pathname.startsWith("/interview");
  const hideNavbar = isLanding || isInterview || isAuthPage;

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
            <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/study-plan" element={<ProtectedRoute><StudyPlan /></ProtectedRoute>} />
            <Route path="/topic/:topicId" element={<ProtectedRoute><TopicDetail /></ProtectedRoute>} />
            <Route path="/practice" element={<ProtectedRoute><PracticeSetup /></ProtectedRoute>} />
            <Route path="/interview" element={<ProtectedRoute><InterviewRoom /></ProtectedRoute>} />
            <Route path="/report/:reportId" element={<ProtectedRoute><Report /></ProtectedRoute>} />
            <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
            <Route path="/resume-analyzer" element={<ProtectedRoute><ResumeAnalyzer /></ProtectedRoute>} />
            <Route path="/job-tracker" element={<ProtectedRoute><JobTracker /></ProtectedRoute>} />
            <Route path="/coding-practice" element={<ProtectedRoute><CodingPractice /></ProtectedRoute>} />
            <Route path="/video-feed" element={<ProtectedRoute><VideoFeed /></ProtectedRoute>} />
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
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
