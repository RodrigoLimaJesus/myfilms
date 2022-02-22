async function getPopular(page) {
  try {
    const response = await fetch('http://localhost:3001/movies/popular', {
      headers: { page },
    });
    const popularMovies = await response.json();

    return popularMovies;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const movieFunctions = { getPopular };

export default movieFunctions;
