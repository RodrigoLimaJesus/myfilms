const axios = require('axios');
const { KEY_MOVIEDB } = process.env;

async function getPopular({ page, lenguage }) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getTopRated({ page, lenguage }) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = { getPopular, getTopRated };
