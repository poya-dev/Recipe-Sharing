import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import ProtectedRoute from './components/ProtectedRoute';
import useAuthStore from './store/authStore';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Sign-Up';

const App = () => {
  const { checkAuth, isAuthenticated } = useAuthStore((state) => ({
    checkAuth: state.checkAuth,
    isAuthenticated: state.isAuthenticated,
  }));

  useEffect(() => {
    console.log(checkAuth);
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/sign-up"
            element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/my-recipes"
            element={<ProtectedRoute element={<p>My Recipes</p>} />}
          />
          <Route
            path="/create-recipe"
            element={<ProtectedRoute element={<p>Create My Recipe</p>} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
