import React, { useContext } from 'react';

import List from '../../../components/List';

import AppContext from '../../../context/AppContext';

export default function InitialSearchs() {
  const { popularMovies, popularTv } = useContext(AppContext);

  return (
    <div>
      <List
        listContent={popularMovies}
        listName="Pricipais buscas de filmes"
        type="movie"
        flexWrap
      />
      <List
        listContent={popularTv}
        listName="Pricipais buscas de séries"
        type="tv"
        flexWrap
      />
    </div>
  );
}
