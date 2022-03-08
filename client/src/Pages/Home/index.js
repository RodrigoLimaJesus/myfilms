import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Header from './components/Header';
import List from './components/List';

export default function Home() {
  const { popularMovies, topRatedMovies, popularTv, topRatedTv } =
    useContext(AppContext);
  return (
    <div>
      <Header />
      <List
        listName="Filmes mais vistos"
        listContent={popularMovies}
        type="movie"
      />
      <List
        listName="Filmes mais bem avaliados"
        listContent={topRatedMovies}
        type="movie"
      />
      <List listName="Séries mais vistas" listContent={popularTv} type="tv" />
      <List
        listName="Séries mais bem avaliadas"
        listContent={topRatedTv}
        type="tv"
      />
    </div>
  );
}
