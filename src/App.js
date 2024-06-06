import React, { useState, useEffect } from 'react';

import AppRouter from './AppRouter';
import CustomCursor from './components/CustomCursor';

import './App.css';
import './styles.css';
import './variables.css';

function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AppRouter />
      {isDesktop && <CustomCursor />}
    </>
  );
}

export default App;
