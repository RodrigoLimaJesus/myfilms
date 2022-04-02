import React from 'react';
import { useNavigate } from 'react-router-dom';

import InDevelopmentImage from '../../images/in-development.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function InDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Header />

      <div className="h-[80vh] w-screen flex flex-col justify-center items-center text-center mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          Opa, essa funcionalidade ainda está sendo desenvolvida.
        </h2>
        <img
          src={InDevelopmentImage}
          alt="Not found logo"
          className="my-3 w-52 sm:w-72 lg:w-80"
        />
        <button
          type="button"
          className="underline cursor-pointer hover:text-cyan-300 md:text-lg lg:text-xl"
          onClick={() => navigate('/')}
        >
          Voltar para tela inicial
        </button>
      </div>

      <Footer />
    </div>
  );
}
