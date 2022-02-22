import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Header from './components/Header';
import List from './components/List';

export default function Home() {
  const { popularMovies, topRatedMovies, popularTv, topRatedTv } =
    useContext(AppContext);
  return (
    <div className="bg-black text-white w-screen h-screen overflow-y-auto fixed">
      <Header />
      <List listName="Filmes mais vistos" listContent={popularMovies} />
      <List listName="Filmes mais bem avaliados" listContent={topRatedMovies} />
      <List listName="Séries mais vistas" listContent={popularTv} />
      <List listName="Séries mais bem avaliadas" listContent={topRatedTv} />
    </div>
  );
}
