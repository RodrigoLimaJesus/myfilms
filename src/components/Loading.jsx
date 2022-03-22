import React from 'react';
import MyFilmsLogo from '../images/myfilms.png';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <img
        src={MyFilmsLogo}
        alt="My Films Logo"
        className="w-40 md:w-48 lg:w-52"
      />
      <iframe
        src="https://embed.lottiefiles.com/animation/96231"
        title="Loading animation"
      ></iframe>
    </div>
  );
}
