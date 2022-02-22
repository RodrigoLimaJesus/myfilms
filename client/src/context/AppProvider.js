import React, { useEffect, useState } from 'react';

import AppContext from './AppContext';
import movies from '../services/movies';

export default function FilmsProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const appLenguage = 'pt-br';

  useEffect(() => {
    async function initialFetchs() {
      const headers = { page: 1, lenguage: appLenguage };
      const popular = await movies.getPopular(headers);
      const topRated = await movies.getTopRated(headers);

      setPopularMovies(popular);
      setTopRatedMovies(topRated);
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
          topRatedMovies,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  );
}
