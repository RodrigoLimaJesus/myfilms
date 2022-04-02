import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import InDevelopmentImage from '../../images/inDevelopment.svg';
import NotFoundImage from '../../images/notFound.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function InDevelopment() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routesInDevelopment = ['/profile'];

  const routeDetails = routesInDevelopment.includes(pathname)
    ? {
        title: 'Opa, essa funcionalidade ainda está sendo desenvolvida.',
        iconSrc: InDevelopmentImage,
      }
    : {
        title: 'Página não encontrada',
        iconSrc: NotFoundImage,
      };

  return (
    <div className="flex flex-col">
      <Header />

      <div className="h-[80vh] w-screen flex flex-col justify-center items-center text-center mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          {routeDetails.title}
        </h2>
        <img
          src={routeDetails.iconSrc}
          alt="Not found logo"
          className="my-3 w-52 sm:w-72 lg:w-80"
        />
        <button
          type="button"
          className="underline cursor-pointer duration-300 hover:text-cyan-300 md:text-lg lg:text-xl"
          onClick={() => navigate('/')}
        >
          Voltar para tela inicial
        </button>
      </div>

      <Footer />
    </div>
  );
}
