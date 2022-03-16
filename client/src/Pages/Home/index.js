import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import HeaderHome from './components/HeaderHome';
import List from './components/List';

export default function Home() {
  const { popularMovies, topRatedMovies, popularTv, topRatedTv } =
    useContext(AppContext);
  return (
    <div>
      <HeaderHome />
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
