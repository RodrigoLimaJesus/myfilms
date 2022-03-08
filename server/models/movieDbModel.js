const axios = require('axios');
const { KEY_MOVIEDB } = process.env;

async function getPopular({ page, lenguage, type }) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${type}/popular?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
  );
  return data;
}

async function getTopRated({ page, lenguage, type }) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${type}/top_rated?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
  );
  return data;
}

async function getDetails({ type, lenguage, id }) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${KEY_MOVIEDB}&language=${lenguage}`,
  );

  return data;
}

module.exports = { getPopular, getTopRated, getDetails };
