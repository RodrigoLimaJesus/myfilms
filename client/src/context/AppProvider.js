import React, { useEffect, useState } from 'react';

import AppContext from './AppContext';
import Loading from '../components/Loading';
import handleLists from '../services/handleLists';

export default function FilmsProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const appLenguage = 'pt-br';

  useEffect(() => {
    async function initialFetchs() {
      const headers = { page: 1, lenguage: appLenguage };

      const [popularMv, topRatedMv, popularTv, topRatedTv] = await Promise.all([
        handleLists.getPopular({ ...headers, type: 'movie' }),
        handleLists.getTopRated({ ...headers, type: 'movie' }),
        handleLists.getPopular({ ...headers, type: 'tv' }),
        handleLists.getTopRated({ ...headers, type: 'tv' }),
      ]);

      setPopularMovies(popularMv);
      setTopRatedMovies(topRatedMv);
      setPopularTv(popularTv);
      setTopRatedTv(topRatedTv);
      setIsMounted(true);
    }

    if (!isMounted) {
      initialFetchs();
    }
  }, [isMounted]);

  return isMounted ? (
    <AppContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        popularTv,
        topRatedTv,
      }}
    >
      {children}
    </AppContext.Provider>
  ) : (
    <Loading />
  );
}
