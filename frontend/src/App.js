import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Sign-Up';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/recipes" element={<p>Recipes</p>} />
          <Route path="/create-recipe" element={<p>Create Recipe</p>} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
