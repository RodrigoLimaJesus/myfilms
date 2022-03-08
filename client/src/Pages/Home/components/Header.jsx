import React, { useContext } from 'react';
import { BsSearch, BsPlusLg, BsFillPlayFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import MyFilmsLogo from '../../../images/myfilms.png';
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
      className={`h-[43vw] w-full bg-cover bg-no-repeat`}
    >
      <div className="p-4 h-full bg-black/40 flex flex-col justify-between md:p-5 lg:p-6">
        <div className="flex justify-between items-center">
          <img
            src={MyFilmsLogo}
            alt="MyFilms logo"
            className="w-20 md:w-32 lg:w-40"
          />
          <div className="flex justify-between text-2xl w-24 md:text-3xl md:w-32">
            {buttonsMenu.map(({ Icon, name }) => (
              <button key={name} type="button">
                <Icon />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <button
            type="button"
            className="text-xs flex flex-col items-center md:text-xl lg:text-2xl"
          >
            <BsPlusLg />
            <span className="mt-1">Minha Lista</span>
          </button>

          <button
            type="button"
            className="bg-white text-black font-bold rounded w-20 py-1 px-2 flex flex-row justify-between items-center md:w-24 md:text-lg lg:w-28 lg:px-3"
          >
            <BsFillPlayFill />
            Trailer
          </button>

          <button
            type="button"
            className="text-xs flex flex-col items-center md:text-xl lg:text-2xl"
          >
            <AiOutlineInfoCircle />
            <span className="mt-1">Saiba mais</span>
          </button>
        </div>
      </div>
    </header>
  );
}
