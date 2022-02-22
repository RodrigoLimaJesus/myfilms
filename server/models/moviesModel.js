const axios = require('axios');
const { KEY_MOVIEDB } = process.env;

async function getPopular(page) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_MOVIEDB}&language=pt-br&page=${page}`,
    );

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = { getPopular };
