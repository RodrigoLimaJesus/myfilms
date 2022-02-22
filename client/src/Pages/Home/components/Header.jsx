import React, { useContext } from 'react';
import { BsSearch, BsPlusLg, BsFillPlayFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import AppContext from '../../../context/AppContext';

export default function Header() {
  const { popularMovies } = useContext(AppContext);
  const { backdrop_path } = popularMovies[0];
  const buttonsMenu = [
    { Icon: BsSearch, name: 'search-home-btn' },
    { Icon: GiHamburgerMenu, name: 'menu-home-btn' },
    { Icon: FaUserCircle, name: 'user-home-btn' },
  ];

  return (
    <header
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
      className={`h-[45vw] bg-cover bg-no-repeat`}
    >
      <div className="p-2 h-full bg-black/40 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h1 className="text-red-500 text-3xl font-bold">MyFilms</h1>
          <div className="flex justify-between text-2xl w-24">
            {buttonsMenu.map(({ Icon, name }) => (
              <button key={name} type="button">
                <Icon />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <button type="button" className="flex flex-col items-center">
            <BsPlusLg />
            <span className="text-xs mt-1">Minha Lista</span>
          </button>

          <button
            type="button"
            className="bg-white text-black rounded px-3 py-1 flex flex-row items-center"
          >
            <BsFillPlayFill />
            Trailer
          </button>

          <button type="button" className="flex flex-col items-center">
            <AiOutlineInfoCircle />
            <span className="text-xs mt-1">Saiba mais</span>
          </button>
        </div>
      </div>
    </header>
  );
}
