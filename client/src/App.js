import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppProvider from './context/AppProvider';
import Home from './Pages/Home';

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  );
}
