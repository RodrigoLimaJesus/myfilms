import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import AppContext from '../../../context/AppContext';

export default function Header() {
  const { popularMovies } = useContext(AppContext);
  const { backdrop_path } = popularMovies[0];

  return (
    <header
      className={`h-[45vw] w-screen bg-cover bg-no-repeat bg-[url(https://image.tmdb.org/t/p/original${backdrop_path})]`}
    >
      <div className="p-3 h-full bg-black/40">
        <div className="flex justify-between items-center">
          <h1 className="text-red-500 text-3xl font-bold">MyFilms</h1>
          <div className="flex justify-between text-2xl w-24">
            <button>
              <BsSearch />
            </button>
            <button>
              <GiHamburgerMenu />
            </button>
            <button>
              <FaUserCircle />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
