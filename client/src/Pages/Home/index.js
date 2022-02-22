import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Header from './components/Header';
import List from './components/List';

export default function Home() {
  const { popularMovies } = useContext(AppContext);
  return (
    <div className="bg-black text-white w-screen h-screen overflow-y-auto fixed">
      <Header />
      <List listName="Filmes mais vistos" listContent={popularMovies} />
    </div>
  );
}
