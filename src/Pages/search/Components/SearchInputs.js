import React from 'react';

export default function SearchInputs(props) {
  const {
    inputSearch,
    setInputSearch,
    inputType,
    setInputType,
    canSearch,
    setCanSearch,
  } = props;

  const inputRadioTypes = [
    { name: 'Filmes', value: 'movie' },
    { name: 'Séries', value: 'tv' },
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCanSearch(true);
      }}
      className="flex flex-col justify-center items-center lg:flex-row"
    >
      <div className="flex flex-row mb-4 lg:m-0 lg:mr-3">
        <input
          type="text"
          className="w-36 px-2 py-1 text-black focus-visible:outline-none rounded-md sm:w-48 md:w-56"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <div className="flex flex-row justify-center items-center">
          {inputRadioTypes.map((radioType) => (
            <label
              key={radioType.value}
              htmlFor={radioType.value}
              className="mx-1 text-lg"
            >
              <input
                id={radioType.value}
                type="radio"
                name="typeRadio"
                value={radioType.value}
                className="mx-1 accent-red-500"
                checked={radioType.value === inputType}
                onChange={(e) => setInputType(e.target.value)}
              />
              {radioType.name}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={canSearch}
        className="px-9 py-1 font-bold rounded-full bg-cyan-500 md:px-12 md:text-lg"
      >
        Buscar
      </button>
    </form>
  );
}
