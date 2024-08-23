import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, checkAuth, loading } = useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    checkAuth: state.checkAuth,
    loading: state.loading,
  }));

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
    };
    verifyAuth();
  }, [checkAuth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
