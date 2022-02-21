import React, { useEffect, useState } from 'react';

import AppContext from './AppContext';
import movies from '../services/movies';

export default function FilmsProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const { REACT_APP_MOVIEDB_KEY } = process.env;
    async function initialFetchs() {
      const popular = await movies.getPopular(REACT_APP_MOVIEDB_KEY, 1);

      setPopularMovies(popular);
      setIsMounted(true);
    }

    if (!isMounted) {
      initialFetchs();
    }
  }, [isMounted]);

  return (
    isMounted && (
      <AppContext.Provider
        value={{
          popularMovies,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  );
}
