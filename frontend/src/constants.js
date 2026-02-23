export const BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL || "http://localhost:3000";
export const FRONTEND_API_BASE_URL = import.meta.env.VITE_FRONTEND_API_BASE_URL || "http://localhost:3001";

export const API_BASE_URL = BACKEND_API_BASE_URL;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    SIGNUP: "/api/auth/signup",
    LOGOUT: "/api/auth/logout",
  },
  INTERVIEW: {
    START: "/api/interview/start",
    END: "/api/interview/end",
    GET_REPORT: "/api/interview",
  },
};