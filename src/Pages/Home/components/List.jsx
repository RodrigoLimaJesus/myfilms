import React from 'react';
import { Link } from 'react-router-dom';

export default function List({ listName, listContent, type }) {
  return (
    listContent.length >= 1 && (
      <div className="m-3">
        <h2 className="font-bold text-xl mb-2">{listName}</h2>
        <div className="scrollbar-thin overflow-x-auto flex flex-row">
          {listContent
            .filter(({ poster_path }) => poster_path)
            .map(({ id, poster_path, title }) => (
              <Link key={id} to={`/details/${type}/${id}`}>
                <div className="w-28 h-36 p-2 duration-300 md:w-36 md:h-44 hover:md:p-0 lg:w-44 lg:h-52">
                  <img
                    alt={title}
                    title={title}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    className="w-full h-full"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    )
  );
}
