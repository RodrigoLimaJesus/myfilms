import React from 'react';

export default function VideoOrThumb({ videoKey, details }) {
  return (
    <div className="h-[43vw] w-full mt-12 md:mt-16 lg:mt-20">
      {videoKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&controls=1`}
          title={details.title}
          allowFullScreen
          className="h-full w-full"
          loading="eager"
        >
          Your browser does not support iframes.
        </iframe>
      ) : (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
          }}
          className={`w-full h-full bg-cover bg-no-repeat`}
        />
      )}
    </div>
  );
}
