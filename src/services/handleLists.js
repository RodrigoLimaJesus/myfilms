import axios from 'axios';

const { REACT_APP_KEY_MOVIEDB: KEY_MOVIEDB } = process.env;
const BASE_URL = 'https://api.themoviedb.org/3';

async function getPopular({ page, language, type }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/popular?api_key=${KEY_MOVIEDB}&language=${language}&page=${page}`,
    );

    return data.results;
  } catch (err) {
    console.log(err.message);

    return [];
  }
}

async function getTopRated({ page, language, type }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/top_rated?api_key=${KEY_MOVIEDB}&language=${language}&page=${page}`,
    );

    return data.results;
  } catch (err) {
    console.log(err.message);

    return [];
  }
}

async function getDetails({ id, language, type }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/${id}?api_key=${KEY_MOVIEDB}&language=${language}`,
    );

    return data;
  } catch (err) {
    console.log(err.message);

    return {};
  }
}

async function getVieos({ id, type, language }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/${id}/videos?api_key=${KEY_MOVIEDB}&language=${language}`,
    );

    return data.results;
  } catch (err) {
    console.log(err.message);

    return {};
  }
}

const handleLists = { getPopular, getTopRated, getDetails, getVieos };

export default handleLists;
