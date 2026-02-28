import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Configure axios interceptor to automatically add the token to requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Matches backend authMiddleware
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Signup service
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users/signup`, userData);
  // We don't log in automatically on signup according to the existing Signup.jsx code.
  return response.data;
};

// Login service
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users/login`, userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    // Optionally store minimal user info separately or let AuthContext decode the token / use response.data.user
    localStorage.setItem('user', JSON.stringify(response.data.user)); 
  }
  return response.data;
};

// Logout service
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get current user (simple synchronous read)
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};
