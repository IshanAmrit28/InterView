import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, logout as authLogout } from '../services/authServices';
import { useDispatch } from 'react-redux';
import { setUser as setReduxUser } from '../redux/authSlice';
import api from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check local storage for an existing session on load
    const storedUser = getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
      dispatch(setReduxUser(storedUser));

      // Refresh user data from backend to ensure hasPassword and other fields are up to date
      const refreshUser = async () => {
        try {
          const { data } = await api.get('/auth/profile');
          if (data.success) {
            setUser(data.user);
            dispatch(setReduxUser(data.user));
            localStorage.setItem('user', JSON.stringify(data.user));
          }
        } catch (err) {
          console.error("Failed to refresh user data:", err);
        }
      };
      refreshUser();
    } else {
      dispatch(setReduxUser(null));
    }
    setLoading(false);
  }, [dispatch]);

  const loginUser = (userData) => {
    setUser(userData); // Set user state after successful login
    dispatch(setReduxUser(userData)); // Sync Redux state
  };

  const logoutUser = () => {
    authLogout(); // Clear local storage
    setUser(null); // Clear state
    dispatch(setReduxUser(null)); // Sync Redux state
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
