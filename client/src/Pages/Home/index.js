import React from 'react';

import Header from './components/Header';

export default function Home() {
  return (
    <div className="bg-black text-white w-screen h-screen overflow-y-auto fixed">
      <Header />
    </div>
  );
}
