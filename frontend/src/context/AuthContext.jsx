import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, logout as authLogout } from '../services/authServices';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for an existing session on load
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const loginUser = (userData) => {
    setUser(userData); // Set user state after successful login
  };

  const logoutUser = () => {
    authLogout(); // Clear local storage
    setUser(null); // Clear state
  };

  const value = {
    user,
    loginUser,
    logoutUser,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
