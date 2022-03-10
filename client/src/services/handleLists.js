import axios from 'axios';

const { REACT_APP_KEY_MOVIEDB: KEY_MOVIEDB } = process.env;
const BASE_URL = 'https://api.themoviedb.org/3';

async function getPopular({ page, lenguage, type }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/popular?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
    );

    return data.results;
  } catch (err) {
    console.log(err);

    return [];
  }
}

async function getTopRated({ page, lenguage, type }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/top_rated?api_key=${KEY_MOVIEDB}&language=${lenguage}&page=${page}`,
    );

    return data.results;
  } catch (err) {
    console.log(err);

    return [];
  }
}

// async function getDetails({ id, lenguage, type }) {
//   try {
//   } catch (error) {}
// }

const handleLists = { getPopular, getTopRated };

export default handleLists;
