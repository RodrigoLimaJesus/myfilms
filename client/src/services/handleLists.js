import axios from 'axios';

const { REACT_APP_BASE_URL_SERVER } = process.env;

async function getPopular({ page, lenguage, type }) {
  try {
    const popular = await axios.get(
      `${REACT_APP_BASE_URL_SERVER}/${type}/popular`,
      { headers: { page, lenguage } },
    );

    return popular.data;
  } catch (err) {
    console.log(err);

    return [];
  }
}

async function getTopRated({ page, lenguage, type }) {
  try {
    const topRated = await axios.get(
      `${REACT_APP_BASE_URL_SERVER}/${type}/top_rated`,
      { headers: { page, lenguage } },
    );

    return topRated.data;
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
