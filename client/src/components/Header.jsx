import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';

import MyFilmsLogo from '../images/myfilms.png';

export default function Header() {
  const buttonsMenu = [
    { Icon: BsSearch, name: 'search-home-btn' },
    { Icon: GiHamburgerMenu, name: 'menu-home-btn' },
    { Icon: FaUserCircle, name: 'user-home-btn' },
  ];

  return (
    <div className="flex justify-between items-center absolute top-0 left-0 right-0 p-3">
      <img
        src={MyFilmsLogo}
        alt="MyFilms logo"
        className="w-20 md:w-32 lg:w-40"
      />
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
