import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppProvider from './context/AppProvider';
import Home from './Pages/Home';
import Details from './Pages/Details';

export default function App() {
  return (
    <div className="bg-black text-white w-screen h-screen overflow-y-auto fixed">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:id" element={<Details />} />
        </Routes>
      </AppProvider>
    </div>
  );
}
