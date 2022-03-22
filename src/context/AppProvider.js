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
  const appLanguage = 'pt-br';

  useEffect(() => {
    async function initialFetchs() {
      const options = { page: 1, language: appLanguage };

      const [popularMv, topRatedMv, popularTv, topRatedTv] = await Promise.all([
        handleLists.getPopular({ ...options, type: 'movie' }),
        handleLists.getTopRated({ ...options, type: 'movie' }),
        handleLists.getPopular({ ...options, type: 'tv' }),
        handleLists.getTopRated({ ...options, type: 'tv' }),
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
        appLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  ) : (
    <Loading />
  );
}
