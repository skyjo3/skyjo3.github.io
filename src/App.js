import React from 'react';

import AppRouter from './AppRouter';
import CustomCursor from './components/CustomCursor';

import './App.css';
import './styles.css';
import './variables.css';

function App() {
  return (
    <>
      <AppRouter />
      <CustomCursor />
    </>
  );
}

export default App;
