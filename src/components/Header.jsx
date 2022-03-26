import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';

import MyFilmsLogo from '../images/myfilms.png';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathsToShowGoBack = ['/details'];

  const canGoBack = pathsToShowGoBack.some((path) => pathname.includes(path));

  const buttonsMenu = [
    { Icon: BsSearch, name: 'search-home-btn' },
    { Icon: GiHamburgerMenu, name: 'menu-home-btn' },
    { Icon: FaUserCircle, name: 'user-home-btn' },
  ];

  return (
    <div className="flex justify-between items-center absolute top-0 left-0 right-0 p-3">
      <div className="flex">
        {canGoBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-2xl mr-3 md:text-3xl"
          >
            <FaArrowLeft />
          </button>
        )}
        <button
          type="button"
          onClick={() => navigate('/')}
          disabled={!canGoBack}
        >
          <img
            src={MyFilmsLogo}
            alt="MyFilms logo"
            className="select-none w-20 md:w-32 lg:w-40"
          />
        </button>
      </div>

      <div className="flex justify-between text-2xl w-24 md:text-3xl md:w-32">
        {buttonsMenu.map(({ Icon, name }) => (
          <button key={name} type="button">
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}
