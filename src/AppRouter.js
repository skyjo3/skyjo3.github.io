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

import PhotoClockDetail from './pages/projects/photoclock/PhotoClockDetail'
import ChronoscopeDetail from './pages/projects/chronoscope/ChronoscopeDetail'
import WomanyDetail from './pages/projects/womany/WomanyDetail'
import QuologueDetail from './pages/projects/quologue/QuologueDetail'
import OllyDetail from './pages/projects/olly/OllyDetail'

      // <Route path="/projects/crescendo" element={<CrescendoDetail />} />
      // <Route path="/projects/slow-game" element={<SlowGameDetail />} />

      // <Route path="/projects/mental-map" element={<MentalMapDetail />} />
      // <Route path="/projects/olo" element={<OloDetail />} />

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
      <Route path="/projects/photoclock" element={<ProjectPage component={PhotoClockDetail} />} />
      <Route path="/projects/chronoscope" element={<ProjectPage component={ChronoscopeDetail} />} />
      <Route path="/projects/womany" element={<ProjectPage component={WomanyDetail} />} />
      <Route path="/projects/quologue" element={<ProjectPage component={QuologueDetail} />} />
      <Route path="/projects/olly" element={<ProjectPage component={OllyDetail} />} />
      <Route path="/about" element={<About />} />
      <Route path="/more" element={<More />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default AppRouter;
