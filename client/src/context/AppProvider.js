import React, { useEffect, useState } from 'react';

import AppContext from './AppContext';
import movies from '../services/movies';

export default function FilmsProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function initialFetchs() {
      const popular = await movies.getPopular(1);

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
