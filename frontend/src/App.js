import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/recipes" element={<p>Recipes</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/sign-up" element={<p>Sign-Up</p>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
