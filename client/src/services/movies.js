const { REACT_APP_BASE_URL_SERVER } = process.env;

async function getPopular({ page, lenguage }) {
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL_SERVER}/movies/popular`,
      {
        headers: { page, lenguage },
      },
    );
    const popularMovies = await response.json();

    return popularMovies;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getTopRated({ page, lenguage }) {
  try {
    const response = await fetch(
      `${REACT_APP_BASE_URL_SERVER}/movies/top_rated`,
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

const movieFunctions = { getPopular, getTopRated };

export default movieFunctions;
