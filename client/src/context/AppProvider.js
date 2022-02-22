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

      const popularM = await handleLists.getPopular({
        ...headers,
        type: 'movies',
      });
      const topRatedM = await handleLists.getTopRated({
        ...headers,
        type: 'movies',
      });
      const popularT = await handleLists.getPopular({
        ...headers,
        type: 'tv',
      });
      const topRatedT = await handleLists.getTopRated({
        ...headers,
        type: 'tv',
      });

      setPopularMovies(popularM);
      setTopRatedMovies(topRatedM);
      setPopularTv(popularT);
      setTopRatedTv(topRatedT);
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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-red-500 text-5xl font-bold">MyFilms</h1>
      <Loading />
    </div>
  );
}
