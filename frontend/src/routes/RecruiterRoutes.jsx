import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Companies from "../pages/recruiter/Companies";
import AdminJobs from "../pages/recruiter/RecruiterJobs";
import PostJob from "../pages/recruiter/PostJob";
import Applicants from "../pages/recruiter/Applicants";

import RecruiterLogin from "../pages/recruiter/RecruiterLogin";
import RecruiterSignup from "../pages/recruiter/RecruiterSignup";

const RecruiterRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<RecruiterLogin />} />
      <Route path="signup" element={<RecruiterSignup />} />
      <Route path="companies" element={<ProtectedRoute allowedRoles={["recruiter"]}><Companies /></ProtectedRoute>} />
      <Route path="jobs" element={<ProtectedRoute allowedRoles={["recruiter"]}><AdminJobs /></ProtectedRoute>} />
      <Route path="jobs/create" element={<ProtectedRoute allowedRoles={["recruiter"]}><PostJob /></ProtectedRoute>} />
      <Route path="jobs/:id/applicants" element={<ProtectedRoute allowedRoles={["recruiter"]}><Applicants /></ProtectedRoute>} />
    </Routes>
  );
};

export default RecruiterRoutes;
