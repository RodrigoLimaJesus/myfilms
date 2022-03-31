import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/List';
import Loading from '../../components/Loading';

import handleLists from '../../services/handleLists';
import SearchInputs from './Components/SearchInputs';
import SearchNotFound from './Components/SearchNotFound';
import InitialSearchs from './Components/InitialSearchs';

export default function Search() {
  const { popularMovies, popularTv, appLanguage } = useContext(AppContext);
  const [hasTrySearch, setHasTrySearch] = useState(false);
  const [searchResponse, setSearhResponse] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputType, setInputType] = useState('movie');

  const [canSearch, setCanSearch] = useState(false);

  useEffect(() => {
    async function getByQuery() {
      const options = {
        type: inputType,
        page: 1,
        language: appLanguage,
        query: inputSearch,
      };

      const result = await handleLists.geSearchByQuery(options);

      setSearhResponse(result);
      setHasTrySearch(true);
    }

    if (canSearch) {
      getByQuery();
      setCanSearch(false);
    }
  }, [inputSearch, inputType, canSearch, appLanguage]);

  return (
    <div>
      <Header />

      <div className="mt-12 md:mt-16 lg:mt-20">
        <SearchInputs
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          inputType={inputType}
          setInputType={setInputType}
          canSearch={canSearch}
          setCanSearch={setCanSearch}
        />

        {hasTrySearch ? (
          searchResponse.length > 0 ? (
            <List
              listContent={searchResponse}
              listName="Sua busca"
              type="movie"
              flexWrap
            />
          ) : (
            <SearchNotFound />
          )
        ) : (
          <InitialSearchs />
        )}
      </div>

      <Footer />
    </div>
  );
}
