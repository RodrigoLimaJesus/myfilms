const { REACT_APP_BASE_URL_SERVER } = process.env;

async function getPopular({ page, lenguage, type }) {
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL_SERVER}/${type}/popular`,
      {
        headers: { page, lenguage },
      },
    );
    const popular = await response.json();

    return popular;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getTopRated({ page, lenguage, type }) {
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL_SERVER}/${type}/top_rated`,
      {
        headers: { page, lenguage },
      },
    );
    const topRated = await response.json();

    return topRated;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const handleLists = { getPopular, getTopRated };

export default handleLists;
