import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/AppContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/List';

import handleLists from '../../services/handleLists';

export default function Search() {
  const { popularMovies, popularTv, appLanguage } = useContext(AppContext);
  const [hasTrySearch, setHasTrySearch] = useState(false);
  const [searchResponse, setSearhResponse] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputType, setInputType] = useState('movie');

  const inputRadioTypes = [
    { name: 'Filmes', value: 'movie' },
    { name: 'Séries', value: 'tv' },
  ];

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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <input
              type="text"
              className="w-36 px-2 py-1 text-black focus-visible:outline-none rounded-md"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <div className="flex flex-row justify-center items-center">
              {inputRadioTypes.map((radioType) => (
                <label key={radioType.value} htmlFor={radioType.value} className="mx-1">
                  <input
                    id={radioType.value}
                    type="radio"
                    name="typeRadio"
                    value={radioType.value}
                    className="mx-1 accent-red-500"
                    checked={radioType.value === inputType}
                    onChange={(e) => setInputType(e.target.value)}
                  />
                  {radioType.name}
                </label>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCanSearch(true)}
            disabled={canSearch}
            className="px-9 py-1 mt-4 font-bold rounded-full bg-cyan-500"
          >
            Buscar
          </button>
        </div>

        {hasTrySearch ? (
          searchResponse.length > 0 ? (
            <List
              listContent={searchResponse}
              listName="Sua busca"
              type="movie"
              flexWrap
            />
          ) : (
            <div>oi</div>
          )
        ) : (
          <>
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
