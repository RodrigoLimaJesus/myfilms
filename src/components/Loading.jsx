import React from 'react';
import MyFilmsLogo from '../images/myfilms.png';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <img
        src={MyFilmsLogo}
        alt="My Films Logo"
        className="select-none w-40 md:w-48 lg:w-52"
      />

      <div className="bloom mt-4" />
    </div>
  );
}
