import React from 'react';

export default function Description({ details }) {
  const releaseYear = details.release_date || details.first_air_date;
  const title = details.title || details.name;
  const genres = details.genres.map((genre) => genre.name);
  const voteAverage = details.vote_average * 10;
  const sinopse = details.overview;

  const averageBorderColor =
    voteAverage <= 50
      ? 'red'
      : voteAverage > 50 && voteAverage <= 75
      ? 'orange'
      : 'green';

  return (
    <div className="flex flex-col mx-2 my-4">
      <h1 className="text-xl font-bold md:text-3xl">
        {title}{' '}
        {releaseYear && (
          <span className="text-gray-300/50">
            ({releaseYear.split('-')[0]})
          </span>
        )}
      </h1>

      <span className="text-gray-300 my-2 md:text-xl">{genres.join(', ')}</span>

      <div>
        <span
          style={{ borderColor: averageBorderColor }}
          className="bg-gray-500/60 font-bold inline-block w-fit rounded-full px-2 py-3 m-1 border-4"
        >
          {`${voteAverage}% `}{' '}
        </span>
        <span>Avaliação das pessoas usuárias</span>
      </div>

      {sinopse && (
        <div className="my-3">
          <h2 className="text-lg font-bold md:text-2xl">Sinopse</h2>
          <p className="md:text-lg">{sinopse}</p>
        </div>
      )}
    </div>
  );
}
