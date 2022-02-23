const axios = require('axios');
const { KEY_MOVIEDB } = process.env;

async function getPopular({ page, lenguage }) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
  );
  return data;
}

async function getTopRated({ page, lenguage }) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
  );
  return data;
}

module.exports = { getPopular, getTopRated };
