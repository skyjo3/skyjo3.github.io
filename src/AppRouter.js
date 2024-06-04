// src/AppRouter.js
import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { pageview } from './utils/gtag';

import ScrollToTop from './components/ScrollToTop';

import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import More from './pages/More';

import PhotoClockDetail from './pages/projects/photoclock/PhotoClockDetail'
import ChronoscopeDetail from './pages/projects/chronoscope/ChronoscopeDetail'
import WomanyDetail from './pages/projects/womany/WomanyDetail'
import QuologueDetail from './pages/projects/quologue/QuologueDetail'

      // <Route path="/projects/crescendo" element={<CrescendoDetail />} />
      // <Route path="/projects/slow-game" element={<SlowGameDetail />} />

      // <Route path="/projects/mental-map" element={<MentalMapDetail />} />
      // <Route path="/projects/olo" element={<OloDetail />} />
      // <Route path="/projects/olly" element={<OllyDetail />} />      

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <TrackPageViews />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/photoclock" element={<PhotoClockDetail />} />
      <Route path="/projects/chronoscope" element={<ChronoscopeDetail />} />
      <Route path="/projects/womany" element={<WomanyDetail />} />
      <Route path="/projects/quologue" element={<QuologueDetail />} />
      <Route path="/more" element={<More />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default AppRouter;
