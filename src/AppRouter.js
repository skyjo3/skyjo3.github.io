// src/AppRouter.js
import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { pageView } from './utils/gtag';

import ScrollToTop from './components/ScrollToTop';
import ProjectPage from './components/ProjectPage';

import Header from './Header';
import Projects from './pages/Projects';
import About from './pages/About';
import More from './pages/More';

import ProtectedProjectDetail from './components/ProtectedProjectDetail'
import QuologueDetail from './pages/projects/quologue/QuologueDetail'
import PhotoClockDetail from './pages/projects/photoclock/PhotoClockDetail'
import ChronoscopeDetail from './pages/projects/chronoscope/ChronoscopeDetail'
import OllyDetail from './pages/projects/olly/OllyDetail'
import WomanyDetail from './pages/projects/womany/WomanyDetail'

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <TrackPageViews />
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/projects/ai-roadmap" element={<ProjectPage component={() => <ProtectedProjectDetail slug="ai-roadmap" />} />} />
      <Route path="/projects/design-systems" element={<ProjectPage component={() => <ProtectedProjectDetail slug="design-systems" />} />} />
      <Route path="/projects/figma-plugins" element={<ProjectPage component={() => <ProtectedProjectDetail slug="figma-plugins" />} />} />
      <Route path="/projects/quologue" element={<ProjectPage component={QuologueDetail} />} />
      <Route path="/projects/photoclock" element={<ProjectPage component={PhotoClockDetail} />} />
      <Route path="/projects/chronoscope" element={<ProjectPage component={ChronoscopeDetail} />} />
      <Route path="/projects/olly" element={<ProjectPage component={OllyDetail} />} />
      <Route path="/projects/womany" element={<ProjectPage component={WomanyDetail} />} />
      <Route path="/about" element={<About />} />
      <Route path="/more" element={<More />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default AppRouter;
