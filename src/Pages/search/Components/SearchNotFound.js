import React from 'react';
import NotFoundSearchGif from '../../../images/notFoundSearch.gif';

export default function SearchNotFound() {
  return (
    <div className="h-[70vh] w-screen flex flex-col justify-center items-center">
      <h2 className="font-bold mb-4 sm:text-lg md:text-xl lg:text-2xl">
        Não econtramos nada para sua busca
      </h2>
      <img
        src={NotFoundSearchGif}
        alt="Gif from Will Smith crying representing a not found"
        className="w-72 rounded-lg border-2 border-white sm:w-80 lg:w-96"
      />
    </div>
  );
}
