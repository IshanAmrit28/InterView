import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const LoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      // Store token
      localStorage.setItem('token', token);
      
      // Fetch user data using the token
      const fetchUserData = async () => {
        try {
          // Assuming /auth/profile returns the user data
          const response = await api.get('/auth/profile');
          if (response.data.success) {
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify(user));
            loginUser(user);

            // Redirect based on role
            if (user.role === 'recruiter' || user.userType === 'recruiter') {
              navigate("/recruiter/companies");
            } else if (user.role === 'admin' || user.userType === 'admin') {
              navigate("/admin/dashboard");
            } else {
              navigate("/candidate/dashboard");
            }
          } else {
            navigate('/login?error=auth_failed');
          }
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          navigate('/login?error=auth_failed');
        }
      };

      fetchUserData();
    } else {
      navigate('/login?error=no_token');
    }
  }, [searchParams, navigate, loginUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Logging you in...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default LoginSuccess;
