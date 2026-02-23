// frontend/src/constants.js

// Attempt to get API URL from import.meta.env (standard Vite) or process.env (as mapped in vite.config.js)
// If neither is found or if it points to an old vercel deployment, fallback to local backend.
// @ts-ignore
const envApiUrl = import.meta.env?.VITE_API_URL || process.env?.API_BASE_URL;
export const API_BASE_URL = envApiUrl && !envApiUrl.includes('vercel.app') ? envApiUrl : "http://localhost:3001";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    SIGNUP: "/api/auth/signup",
    LOGOUT: "/api/auth/logout",
  },
  INTERVIEW: {
    START: "/api/interview/start",
    END: "/api/interview/end",
    // Used for fetching a specific report by ID (GET /api/interview/:reportId)
    GET_REPORT: "/api/interview",
  },
};
