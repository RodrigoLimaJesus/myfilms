import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppProvider from './context/AppProvider';
import Home from './Pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white w-screen h-screen overflow-y-auto fixed">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppProvider>
    </div>
  );
}
