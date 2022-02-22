import React from 'react';

export default function List({ listName, listContent }) {
  return (
    <div className="m-3">
      <h2 className="font-bold text-xl mb-2">{listName}</h2>
      <div className="scrollbar-thin flex flex-row overflow-x-auto">
        {listContent.map(({ id, poster_path, title }) => (
          <img
            key={id}
            alt={title}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            className="w-28 mr-3 mb-2 md:w-32"
          />
        ))}
      </div>
    </div>
  );
}
