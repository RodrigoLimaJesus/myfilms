import React, { useContext } from 'react';
import { BsPlusLg, BsFillPlayFill } from 'react-icons/bs';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import AppContext from '../../../context/AppContext';
import { Link } from 'react-router-dom';

export default function BackdropPath() {
  const { popularMovies } = useContext(AppContext);
  const { backdrop_path, id } = popularMovies[0];
  const type = 'movie';

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
      className="h-[43vw] w-full bg-cover bg-no-repeat"
    >
      <div className="p-4 h-full bg-black/40 flex flex-col-reverse justify-between md:p-5 lg:p-6">
        <div className="flex flex-row justify-between items-center">
          <Link
            to=""
            className="text-xs flex flex-col items-center md:text-xl lg:text-2xl"
          >
            <BsPlusLg />
            <span className="mt-1">Minha Lista</span>
          </Link>

          <Link
            to={`details/${type}/${id}`}
            className="bg-white text-black font-bold rounded w-20 py-1 px-2 flex flex-row justify-between items-center md:w-24 md:text-lg lg:w-28 lg:px-3"
          >
            <BsFillPlayFill />
            Trailer
          </Link>

          <Link
            to={`details/${type}/${id}`}
            className="text-xs flex flex-col items-center md:text-xl lg:text-2xl"
          >
            <AiOutlineInfoCircle />
            <span className="mt-1">Saiba mais</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
