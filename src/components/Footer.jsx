import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import TmdbLogo from '../images/tmdbLogo.svg';
export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center md:flex-row md:text-lg lg:text-xl">
      <div className="flex flex-row justify-center items-center m-2 md:m-4">
        <img
          src={TmdbLogo}
          alt="The Movie Database Logo"
          className="select-none w-14"
        />
        <span className="text-xs ml-2 lg:text-sm">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </span>
      </div>
      <div className="flex flex-row justify-center items-center m-2 md:m-4">
        <span>&copy; 2022 - Rodrigo Lima</span>
        <a
          href="https://github.com/RodrigoLimaJesus"
          rel="noreferrer"
          target="_blank"
          className="mx-1"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-lima-jesus/"
          rel="noreferrer"
          target="_blank"
          className="mx-1"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
}
