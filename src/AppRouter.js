// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import More from './pages/More';
import Header from './Header';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/more" element={<More />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default AppRouter;
