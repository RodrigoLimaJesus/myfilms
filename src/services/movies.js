async function getPopular(key, page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-br&page=${page}`,
    );
    const { results } = await response.json();

    return results;
  } catch (e) {
    console.log(e.message);
    return [];
  }
}

const movieFunctions = { getPopular };

export default movieFunctions;
