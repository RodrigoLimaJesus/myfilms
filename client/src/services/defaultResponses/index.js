const popularMovie = [
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Pela primeira vez na história cinematográfica do Homem-Aranha, a identidade do nosso herói amigo da vizinhança é revelada, colocando as suas responsabilidades de super-herói em conflito com a sua vida pessoal/normal e colocando em risco aqueles com quem se preocupa. Quando Peter pede ajuda ao Doutor Estranho para restaurar o seu segredo, o feitiço abre um buraco no seu mundo, libertando os vilões mais poderosos que já lutaram contra o Homem-Aranha em qualquer universo. Agora, Peter terá que superar o seu maior desafio até hoje, que não alterará apenas o seu próprio futuro para sempre, mas também o futuro do Multiverso.',
    popularity: 6865.258,
    poster_path: '/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
    release_date: '2021-12-15',
    title: 'Homem-Aranha: Sem Volta a Casa',
    video: false,
    vote_average: 8.3,
    vote_count: 8220,
  },
];

const topRatedMovie = [
  {
    adult: false,
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    genre_ids: [18, 80],
    id: 238,
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Baseado no best-seller de Mário Puzo, o filme acompanha o percurso de Don Vito Corleone, o patriarca de uma das mais notáveis e importantes famílias da máfia italiana de Nova Iorque.',
    popularity: 89.722,
    poster_path: '/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg',
    release_date: '1972-03-14',
    title: 'O Padrinho',
    video: false,
    vote_average: 8.7,
    vote_count: 15519,
  },
];

const popularTv = [
  {
    backdrop_path: '/oKt4J3TFjWirVwBqoHyIvv5IImd.jpg',
    first_air_date: '2019-06-16',
    genre_ids: [18],
    id: 85552,
    name: 'Euphoria',
    origin_country: ['US'],
    original_language: 'en',
    original_name: 'Euphoria',
    overview:
      'Protagonizada por Zendaya, esta série original HBO apresenta a visão crua e realista de um grupo de alunos do secundário. Atenção: Esta série contem uma linguagem forte e suscetível, com cenas de sexo explícito, uso de drogas e violência.',
    popularity: 6659.342,
    poster_path: '/288q0JefZUuTfqUG2qzPTCZYuAL.jpg',
    vote_average: 8.4,
    vote_count: 6904,
  },
];

const topRatedTv = [
  {
    backdrop_path: '/7q448EVOnuE3gVAx24krzO7SNXM.jpg',
    first_air_date: '2021-09-03',
    genre_ids: [10764],
    id: 130392,
    name: "The D'Amelio Show",
    origin_country: ['US'],
    original_language: 'en',
    original_name: "The D'Amelio Show",
    overview: '',
    popularity: 24.039,
    poster_path: '/z0iCS5Znx7TeRwlYSd4c01Z0lFx.jpg',
    vote_average: 9.4,
    vote_count: 2639,
  },
];

const defaultResponses = { popularMovie, topRatedMovie, popularTv, topRatedTv };

export default defaultResponses;
